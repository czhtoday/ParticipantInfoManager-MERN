import React, { useMemo } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import { getAllParticipants, updateParticipant, deleteParticipant } from '../services/participantService';

function ParticipantTable() {
  const data = useMemo(() => getAllParticipants(), []);
  const columns = useMemo(() => [
    { Header: 'First Name', accessor: 'firstname' },
    { Header: 'Last Name', accessor: 'lastname' },
    // 添加其他列
    { Header: 'Actions', id: 'actions', Cell: ({ row }) => (
        <div>
          <button onClick={() => editRow(row.original)}>Edit</button>
          <button onClick={() => deleteRow(row.original._id)}>Delete</button>
        </div>
      )}
  ], []);

  const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  // 分页和搜索处理逻辑
  // 编辑和删除的处理函数

  return (
    <div>
      {/* 渲染表格 */}
    </div>
  );
}

export default ParticipantTable;
