import { useEffect, useState } from "react";
import "./App.css";
import TableData from "./components/TableData";
import { Button, Form, Navbar, Container } from "react-bootstrap";
import moment from "moment";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [client, setClient] = useState([]);
  const [selected, setSelected] = useState("");
  const [dateStart, setDateStart] = useState(moment().format("YYYY-MM-DD"));
  const [dateEnd, setDateEnd] = useState(moment().format("YYYY-MM-DD"));

  const getData = async (params) => {
    try {
      const resData = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        { params: params }
      );
      setData(resData.data);
      const resClient = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setClient(resClient.data);
      //console.log(res.data);
    } catch (error) {
      //console.error(error);
    }
  };
  useEffect(() => {
    let params = {
      customer: selected ? selected : null,
      fromDate: moment(dateStart).format("YYYY-MM-DD"),
      toDate: moment(dateEnd).format("YYYY-MM-DD"),
    };
    getData(params);
  }, []);
  // useEffect(() => {
  //   setData([
  //     {
  //       SO_ID: "9163208627913159345",
  //       SO_NAME: "Sales Order #0002732123",
  //       OMP_ID: "9163208627913159288",
  //       SO_CREATED_WHEN: "2022-04-05 15:08:16",
  //       SO_MODIFIED_WHEN: "2022-04-19 08:17:19",
  //       SO_PARENT_ID: "9163208627913159286",
  //       SO_STATUS: "Processing",
  //       SFDC_ID: "SO2732123",
  //       EXTERNAL_ORDER_ID: "SO2732123",
  //       CUSTOMER_NAME: "GPON_WSIR",
  //       PARTNER_NAME: "ACME COMPANY",
  //       CUSTOMER_ACCOUNT_NUMBER: "331338",
  //       CUSTOMER_ID: "9163208627913159286",
  //       CUSTOMER_TYPE: "Partner Customer",
  //       CUSTOMER_CREATED_WHEN: "2022-04-05 15:06:50",
  //       REVISION: "1",
  //       SOLUTION_ID: "9163208627913159330",
  //       SOLUTION_NAME: "GPON20220405-0001-01",
  //       ORDER_TYPE: "Install",
  //       ORDER_TYPE_REV: "Install",
  //       ORDER_ENTRY_LINK:
  //         "https://config.naas-itn03.telus.com/unified/home/order/details?orderId=9163208627913159345&solutionId=9163208627913159330&customerId=9163208627913159286",
  //       TIME_ZONE: "MST",
  //       LINKS: [
  //         {
  //           label: "Open Order in source",
  //           id: "SOURCE_LINK",
  //           value:
  //             "https://flcncapp-itn03.tsl.telus.com/common/uobject.jsp?tab=_Order+Parameters&object=9163208627913159345",
  //         },
  //       ],
  //       ORDER_SLA: "ND",
  //     },
  //     {
  //       SO_ID: "9163208668013159779",
  //       SFDC_REQUESTED_DATE: "2022-04-05 00:00:00",
  //       SO_NAME: "Sales Order #0002732130",
  //       OMP_ID: "9156917425913482080",
  //       CSR_ID: "x228874",
  //       CSR_NAME_BSE: "Nitish Sharma",
  //       SO_CREATED_WHEN: "2022-04-05 15:12:59",
  //       SO_MODIFIED_WHEN: "2022-04-05 15:16:42",
  //       SO_PARENT_ID: "9156917425913482078",
  //       RCID: "0007737690",
  //       SO_STATUS: "Processing",
  //       SFDC_ID: "OR-00519881.0001",
  //       EXTERNAL_ORDER_ID: "OR-00519881.0001",
  //       CUSTOMER_NAME: "SFDC CRMTESTING RCID 22",
  //       CUSTOMER_ACCOUNT_NUMBER: "265103",
  //       CUSTOMER_ID: "9156917425913482078",
  //       CUSTOMER_TYPE: "NaaS",
  //       CUSTOMER_CREATED_WHEN: "2020-04-07 11:31:00",
  //       REVISION: "1",
  //       SOLUTION_ID: "9160982512813701621",
  //       SOLUTION_NAME: "OR-00519881",
  //       ORDER_TYPE: "Install",
  //       ORDER_ENTRY_LINK:
  //         "https://telus--uatmay.my.salesforce.com/80102000000mCM6AAM",
  //       TIME_ZONE: "PST",
  //       LINKS: [
  //         {
  //           label: "Open Order in source",
  //           id: "SOURCE_LINK",
  //           value:
  //             "https://flcncapp-itn03.tsl.telus.com/common/uobject.jsp?tab=_Order+Parameters&object=9163208668013159779",
  //         },
  //       ],
  //       ORDER_SLA: "DELAYED",
  //     },
  //     {
  //       SO_ID: "9163208651513159737",
  //       SFDC_REQUESTED_DATE: "2022-04-04 00:00:00",
  //       SO_NAME: "Sales Order #0002732145",
  //       OMP_ID: "9159028580013802861",
  //       CSR_ID: "x228874",
  //       CSR_NAME_BSE: "Nitish Sharma",
  //       SO_CREATED_WHEN: "2022-04-05 15:18:00",
  //       SO_MODIFIED_WHEN: "2022-04-05 15:18:59",
  //       SO_PARENT_ID: "9159028580013802859",
  //       RCID: "0007737689",
  //       SO_STATUS: "Processing",
  //       SFDC_ID: "OR-00519897.0001",
  //       EXTERNAL_ORDER_ID: "OR-00519897.0001",
  //       CUSTOMER_NAME: "SFDC CRMTESTING RCID 11",
  //       CUSTOMER_ACCOUNT_NUMBER: "277401",
  //       CUSTOMER_ID: "9159028580013802859",
  //       CUSTOMER_TYPE: "NaaS",
  //       CUSTOMER_CREATED_WHEN: "2020-12-07 20:02:09",
  //       REVISION: "1",
  //       SOLUTION_ID: "9160012802813265143",
  //       SOLUTION_NAME: "OR-00519897",
  //       ORDER_TYPE: "Install",
  //       ORDER_ENTRY_LINK:
  //         "https://telus--uatmay.my.salesforce.com/80102000000mCNdAAM",
  //       TIME_ZONE: "PST",
  //       LINKS: [
  //         {
  //           label: "Open Order in source",
  //           id: "SOURCE_LINK",
  //           value:
  //             "https://flcncapp-itn03.tsl.telus.com/common/uobject.jsp?tab=_Order+Parameters&object=9163208651513159737",
  //         },
  //       ],
  //       ORDER_SLA: "DELAYED",
  //     },
  //     {
  //       SO_ID: "9163208935813164754",
  //       SFDC_REQUESTED_DATE: "2022-04-03 00:00:00",
  //       SO_NAME: "Sales Order #0002732230",
  //       OMP_ID: "9159028580013802861",
  //       CSR_ID: "T978577",
  //       CSR_NAME_BSE: "Sai Kumar",
  //       SO_CREATED_WHEN: "2022-04-05 15:58:40",
  //       SO_MODIFIED_WHEN: "2022-04-05 15:59:25",
  //       SO_PARENT_ID: "9159028580013802859",
  //       RCID: "0007737689",
  //       SO_STATUS: "Processing",
  //       SFDC_ID: "OR-00519938.0001",
  //       EXTERNAL_ORDER_ID: "OR-00519938.0001",
  //       CUSTOMER_NAME: "SFDC CRMTESTING RCID 11",
  //       CUSTOMER_ACCOUNT_NUMBER: "277401",
  //       CUSTOMER_ID: "9159028580013802859",
  //       CUSTOMER_TYPE: "NaaS",
  //       CUSTOMER_CREATED_WHEN: "2020-12-07 20:02:09",
  //       REVISION: "1",
  //       SOLUTION_ID: "9163208952013164944",
  //       SOLUTION_NAME: "OR-00519938",
  //       ORDER_TYPE: "Install",
  //       ORDER_ENTRY_LINK:
  //         "https://telus--uatmay.my.salesforce.com/80102000000mCQIAA2",
  //       TIME_ZONE: "PST",
  //       LINKS: [
  //         {
  //           label: "Open Order in source",
  //           id: "SOURCE_LINK",
  //           value:
  //             "https://flcncapp-itn03.tsl.telus.com/common/uobject.jsp?tab=_Order+Parameters&object=9163208935813164754",
  //         },
  //       ],
  //       ORDER_SLA: "DELAYED",
  //     },
  //     {
  //       SO_ID: "9163208953513165060",
  //       SFDC_REQUESTED_DATE: "2022-04-04 00:00:00",
  //       SO_NAME: "Sales Order #0002732162 rev. 1",
  //       OMP_ID: "9155348198813477916",
  //       CSR_ID: "X211375",
  //       CSR_NAME_BSE: "Mehul Agnihotri",
  //       SO_CREATED_WHEN: "2022-04-05 16:01:20",
  //       SO_MODIFIED_WHEN: "2022-04-05 16:01:42",
  //       SO_PARENT_ID: "9155348198813477914",
  //       RCID: "0007737692",
  //       SO_STATUS: "Processing",
  //       SFDC_ID: "OR-00519873.0001",
  //       EXTERNAL_ORDER_ID: "OR-00519873.0001",
  //       CUSTOMER_NAME: "SFDC CRMTESTING RCID 44",
  //       CUSTOMER_ACCOUNT_NUMBER: "252963",
  //       CUSTOMER_ID: "9155348198813477914",
  //       CUSTOMER_TYPE: "NaaS",
  //       CUSTOMER_CREATED_WHEN: "2019-10-08 20:33:09",
  //       REVISION: "2",
  //       SOLUTION_ID: "9163208790113163488",
  //       SOLUTION_NAME: "OR-00519873",
  //       ORDER_TYPE: "Install",
  //       ORDER_ENTRY_LINK:
  //         "https://telus--uatmay.my.salesforce.com/80102000000mCLwAAM",
  //       TIME_ZONE: "PST",
  //       LINKS: [
  //         {
  //           label: "Open Order in source",
  //           id: "SOURCE_LINK",
  //           value:
  //             "https://flcncapp-itn03.tsl.telus.com/common/uobject.jsp?tab=_Order+Parameters&object=9163208953513165060",
  //         },
  //       ],
  //       ORDER_SLA: "DELAYED",
  //     },
  //     {
  //       SO_ID: "9163214951213201087",
  //       SFDC_REQUESTED_DATE: "2022-04-05 00:00:00",
  //       SO_NAME: "Sales Order #0002732880",
  //       OMP_ID: "9155348198813477916",
  //       CSR_ID: "x228874",
  //       CSR_NAME_BSE: "Nitish Sharma",
  //       SO_CREATED_WHEN: "2022-04-06 08:41:38",
  //       SO_MODIFIED_WHEN: "2022-04-06 08:45:12",
  //       SO_PARENT_ID: "9155348198813477914",
  //       RCID: "0007737692",
  //       SO_STATUS: "PONR is passed",
  //       SFDC_ID: "OR-00519983.0001",
  //       EXTERNAL_ORDER_ID: "OR-00519983.0001",
  //       CUSTOMER_NAME: "SFDC CRMTESTING RCID 44",
  //       CUSTOMER_ACCOUNT_NUMBER: "252963",
  //       CUSTOMER_ID: "9155348198813477914",
  //       CUSTOMER_TYPE: "NaaS",
  //       CUSTOMER_CREATED_WHEN: "2019-10-08 20:33:09",
  //       REVISION: "1",
  //       SOLUTION_ID: "9160054649613378783",
  //       SOLUTION_NAME: "OR-00519983",
  //       ORDER_TYPE: "Install",
  //       ORDER_ENTRY_LINK:
  //         "https://telus--uatmay.my.salesforce.com/80102000000mCXnAAM",
  //       TIME_ZONE: "MST",
  //       LINKS: [
  //         {
  //           label: "Open Order in source",
  //           id: "SOURCE_LINK",
  //           value:
  //             "https://flcncapp-itn03.tsl.telus.com/common/uobject.jsp?tab=_Order+Parameters&object=9163214951213201087",
  //         },
  //       ],
  //       ORDER_SLA: "DELAYED",
  //     },
  //     {
  //       SO_ID: "9163215088513205220",
  //       SFDC_REQUESTED_DATE: "2022-04-05 00:00:00",
  //       SO_NAME: "Sales Order #0002732904",
  //       OMP_ID: "9155348198813477916",
  //       CSR_ID: "x241473",
  //       CSR_NAME_BSE: "Sudhakar Pandey",
  //       SO_CREATED_WHEN: "2022-04-06 09:03:17",
  //       SO_MODIFIED_WHEN: "2022-04-06 09:03:36",
  //       SO_PARENT_ID: "9155348198813477914",
  //       RCID: "0007737692",
  //       SO_STATUS: "Processing",
  //       SFDC_ID: "OR-00519976.0001",
  //       EXTERNAL_ORDER_ID: "OR-00519976.0001",
  //       CUSTOMER_NAME: "SFDC CRMTESTING RCID 44",
  //       CUSTOMER_ACCOUNT_NUMBER: "252963",
  //       CUSTOMER_ID: "9155348198813477914",
  //       CUSTOMER_TYPE: "NaaS",
  //       CUSTOMER_CREATED_WHEN: "2019-10-08 20:33:09",
  //       REVISION: "1",
  //       SOLUTION_ID: "9163215099713205354",
  //       SOLUTION_NAME: "OR-00519976",
  //       ORDER_TYPE: "Install",
  //       ORDER_ENTRY_LINK:
  //         "https://telus--uatmay.my.salesforce.com/80102000000mCWzAAM",
  //       TIME_ZONE: "MST",
  //       LINKS: [
  //         {
  //           label: "Open Order in source",
  //           id: "SOURCE_LINK",
  //           value:
  //             "https://flcncapp-itn03.tsl.telus.com/common/uobject.jsp?tab=_Order+Parameters&object=9163215088513205220",
  //         },
  //       ],
  //       ORDER_SLA: "DELAYED",
  //     },
  //   ]);
  //   setClient([
  //     {
  //       _id: "62a190133ac334e2f48610b5",
  //       CUSTOMER_NAME: "GPON_WSIR",
  //       CUSTOMER_ACCOUNT_NUMBER: "331338",
  //       CUSTOMER_ID: "9163208627913159286",
  //       CUSTOMER_TYPE: "Partner Customer",
  //       CUSTOMER_CREATED_WHEN: "2022-04-05 15:06:50",
  //     },
  //     {
  //       _id: "62a1912d3ac334e2f48610b6",
  //       CUSTOMER_NAME: "SFDC CRMTESTING RCID 22",
  //       CUSTOMER_ACCOUNT_NUMBER: "265103",
  //       CUSTOMER_ID: "9156917425913482078",
  //       CUSTOMER_TYPE: "NaaS",
  //       CUSTOMER_CREATED_WHEN: "2020-04-07 11:31:00",
  //     },
  //     {
  //       _id: "62a1922b3ac334e2f48610b7",
  //       CUSTOMER_NAME: "SFDC CRMTESTING RCID 11",
  //       CUSTOMER_ACCOUNT_NUMBER: "277401",
  //       CUSTOMER_ID: "9159028580013802859",
  //       CUSTOMER_TYPE: "NaaS",
  //       CUSTOMER_CREATED_WHEN: "2020-12-07 20:02:09",
  //     },
  //     {
  //       _id: "62a192483ac334e2f48610b8",
  //       CUSTOMER_NAME: "SFDC CRMTESTING RCID 44",
  //       CUSTOMER_ACCOUNT_NUMBER: "252963",
  //       CUSTOMER_ID: "9155348198813477914",
  //       CUSTOMER_TYPE: "NaaS",
  //       CUSTOMER_CREATED_WHEN: "2019-10-08 20:33:09",
  //     },
  //     {
  //       _id: "62a1926d3ac334e2f48610b9",
  //       CUSTOMER_NAME: "SFDC CRMTESTING RCID 33",
  //       CUSTOMER_ACCOUNT_NUMBER: "331364",
  //       CUSTOMER_ID: "9163215573613212170",
  //       CUSTOMER_TYPE: "NaaS",
  //       CUSTOMER_CREATED_WHEN: "2022-04-06 10:25:41",
  //     },
  //     {
  //       _id: "62a1927f3ac334e2f48610ba",
  //       CUSTOMER_NAME: "SFDC CRMTESTING RCID 55",
  //       CUSTOMER_ACCOUNT_NUMBER: "253395",
  //       CUSTOMER_ID: "9155364520813058354",
  //       CUSTOMER_TYPE: "Business",
  //       CUSTOMER_CREATED_WHEN: "2019-10-10 17:53:59",
  //     },
  //   ]);
  // }, []);

  const search = () => {
    let params = {
      customer: selected ? selected : null,
      fromDate: moment(dateStart).format("YYYY-MM-DD"),
      toDate: moment(dateEnd).format("YYYY-MM-DD"),
    };
    getData(params);
  };

  return (
    <div>
      <Navbar bg="dark" style={{ height: 50 }}>
        <Container></Container>
      </Navbar>
      <div className="container">
        <div className="row mt-4">
          <div className="row">
            <div className="col-3">
              <Form.Label>Client</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setSelected(e.target.value)}
              >
                <option value="">All</option>

                {client.map((row, index) => (
                  <option value={row._id} key={index}>
                    {row.CUSTOMER_NAME}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className="col-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={dateStart}
                onChange={(e) =>
                  setDateStart(moment(e.target.value).format("YYYY-MM-DD"))
                }
              />
            </div>
            <div className="col-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={dateEnd}
                onChange={(e) =>
                  setDateEnd(moment(e.target.value).format("YYYY-MM-DD"))
                }
              />
            </div>
            <div className="col-3">
              <Button variant="primary" onClick={search} className="mt-4">
                Buscar
              </Button>{" "}
            </div>
          </div>
          <TableData data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
