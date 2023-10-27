import { NextPage } from 'next';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import Flex from '@/src/ui-kit/Flex';
import Text from '@/src/ui-kit/Text';
import { tableStyles } from './styles';
import { IdTypes, TablePropsInterface as Props } from './types';
import { BetItemInterface } from '@/src/api/wb/types';
import { adaptiveWidthData } from './config';
import LinkIcon from '@/src/assets/link.svg';
import CopyIcon from '@/src/assets/copy.svg';
import PaginationButton from './components/Pagination';
const {
  Logo,
  DefaultLogo,
  Wrapper,
  StyledTable,
  HeadTr,
  BodyTr,
  Thead,
  Tbody,
  Th,
  Td,
  LogoWrapper,
  PaginationArrow,
  StyledImage,
  StyledLink,
  StyledCpm,
} = tableStyles;

const Table: NextPage<Props> = ({ data }) => {
  const columnHelper = createColumnHelper<BetItemInterface>();
  const columns = [
    columnHelper.accessor('position', {
      id: 'position',
      header: 'Место',
      cell: (info) => <Text pattern="body3">{info.getValue()}</Text>,
    }),
    columnHelper.accessor('image', {
      id: 'image',
      header: 'Фото',
      cell: (info) => (
        <StyledImage alt="image" src={info.getValue()} width={50} height={65} />
      ),
    }),
    columnHelper.accessor('article', {
      id: 'article',
      header: 'Артикул',
      cell: (info) => (
        <Flex
          flexDirection="row"
          width="max-content"
          gap="5px"
          justifyContent="center"
          alignItems="center"
        >
          <LinkIcon />
          <StyledLink
            target="_blank"
            href={`https://www.wildberries.ru/catalog/0/search.aspx?sort=popular&search=${info.getValue()}`}
          >
            {info.getValue()}
          </StyledLink>
          <CopyIcon />
        </Flex>
      ),
    }),
    columnHelper.accessor('position_on_page', {
      id: 'position_on_page',
      header: 'Позиция',
      cell: (info) => <Text pattern="body3">{info.getValue()}</Text>,
    }),
    columnHelper.accessor('cpm', {
      id: 'cpm',
      header: 'Ставка',
      cell: (info) => (
        <StyledCpm
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          {info.getValue()} ₽
        </StyledCpm>
      ),
    }),
    columnHelper.accessor('subject.name', {
      id: 'subjectName',
      header: 'Категория',
      cell: (info) => <Text pattern="body3">{info.getValue()}</Text>,
    }),
    columnHelper.accessor('delivery_time', {
      id: 'delivery_time',
      header: 'Доставка',
      cell: (info) => <Text pattern="body3">{info.getValue()} ч</Text>,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 8,
      },
    },
  });

  return (
    <Wrapper>
      <StyledTable>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <HeadTr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th
                  key={header.id}
                  colSpan={header.colSpan}
                  endpoins={adaptiveWidthData[header.id as IdTypes]}
                >
                  {header.isPlaceholder ? null : (
                    <Flex
                      justifyContent={
                        header.id === 'balance' ? 'flex-end' : 'flex-start'
                      }
                    >
                      <Text pattern="body3" textAlign={'center'}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Text>
                    </Flex>
                  )}
                </Th>
              ))}
            </HeadTr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row, index) => (
            <BodyTr key={row.id} bg={index % 2 === 0 ? 'transparent' : 'white'}>
              {row.getVisibleCells().map((cell) => (
                <Td
                  key={cell.id}
                  endpoins={adaptiveWidthData[cell.column.id as IdTypes]}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </BodyTr>
          ))}
        </Tbody>
      </StyledTable>
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        gap="20px"
        margin="24px 0"
      >
        {Array.from(
          { length: table.getPageCount() },
          (_, index) => index + 1
        ).map((item) => (
          <PaginationButton
            title={item.toString()}
            selected={table.getState().pagination.pageIndex + 1 === item}
            onClick={() => table.setPageIndex(item - 1)}
          />
        ))}
      </Flex>
    </Wrapper>
  );
};

export default Table;
