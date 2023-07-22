import { useEffect, useRef, useState } from 'react';
import DataTable from '../../common/DataTable/DataTale';
import columns from './columns';
import { ExtToDo, ToDo } from './ItemTypes';
import { FAKE_API } from '../Settings';
import { useMutation } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';
import { TBody, THead } from '../../common/DataTable/Styles/TableElements';
import { useNavigate } from 'react-router-dom';
import Details from './Details';
import { Button } from '../../common/layout/styles/Common';

const StyledDataTable = styled(DataTable)`
  ${TBody} {
    background: red;
  }
` as typeof DataTable;

function ReactDataTable() {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState<ToDo[]>([]);
  const [tableData, setTableData] = useState<ExtToDo[]>([]);
  const [isChildComponentVisible, setChildComponentVisible] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  // Ref for the container div to get access to the DOM element
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop } = event.currentTarget;
    setScrollPosition(scrollTop);
  };

  const handleShowChildComponent = (isVisible: boolean) => {
    setChildComponentVisible(isVisible);
  };
  const { mutate } = useMutation({
    mutationFn: async () => {
      const response = await axios.get<ToDo[]>(`${FAKE_API}/todos`);
      return response.data;
    },
    onSuccess: (res) => {
      const rows = res.map((row: ToDo) => {
        return {
          ...row,
          onBlur: () => {},
          onClick: () => {
            navigate('/react-datatable-details', {
              state: {
                receptionNo: 1,
                userId: 'user1',
              },
            });
          },
        } as ExtToDo;
      });
      setTableData(rows);
    },
    onSettled: async () => {
      console.log("I'm second!");
    },
  });

  // const handleButtonClick = async () => {
  //   mutate();
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('API call');
        // Your API call here
        const response = await axios.get<ToDo[]>(`${FAKE_API}/todos`);
        const rows = response.data.map((row: ToDo) => {
          return {
            ...row,
            onBlur: () => {},
            onClick: () => {
              navigate('/react-datatable-details', {
                state: {
                  receptionNo: 1,
                  userId: 'user1',
                },
              });
            },
          } as ExtToDo;
        });
        setTableData(rows);
      } catch (error) {}
    };

    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <>
      {isChildComponentVisible ? (
        <Details setState={(isVisible) => handleShowChildComponent(isVisible)} />
      ) : (
        <div>
          <label>This is a basic React Datatable!!</label>
          <Button onClick={() => handleShowChildComponent(true)}>Show Details</Button>
          {/* <button onClick={handleButtonClick}>Load Data</button> */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <StyledDataTable
              data={tableData || []}
              columns={columns}
              showNavigation
              checkbox
              selectedRows={setSelectedRows}
            />
          </div>
          <pre>{JSON.stringify(selectedRows)}</pre>
        </div>
      )}
    </>
  );
}

export default ReactDataTable;
