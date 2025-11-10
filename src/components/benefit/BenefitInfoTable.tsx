import { Table } from "@chakra-ui/react";
import { FocusIcon, ScanEye } from "lucide-react";
import BenefitInfoIcon from "./BenefitInfoIcon";

const BenefitInfoTable = () => {
  return (
    <Table.Root size={{ base: "sm", md: "md" }} interactive>
      <Table.Header bg="green.800">
        <Table.Row color="white">
          <Table.ColumnHeader>#</Table.ColumnHeader>
          <Table.ColumnHeader>Image</Table.ColumnHeader>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Description</Table.ColumnHeader>
          <Table.ColumnHeader>Type</Table.ColumnHeader>
          <Table.ColumnHeader>Timestamp</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell fontSize="sm" fontWeight="medium">
            1
          </Table.Cell>
          <Table.Cell>
            <BenefitInfoIcon as={FocusIcon} color={"blue"} />
          </Table.Cell>
          <Table.Cell>Motion Detection Alert</Table.Cell>
          <Table.Cell>motion detected on Dahua 3</Table.Cell>
          <Table.Cell>Motion Detection</Table.Cell>
          <Table.Cell>11:32:11, 1404/07/30</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>
            <BenefitInfoIcon as={ScanEye} color={"purple"} />
          </Table.Cell>
          <Table.Cell>Object Detection Alert</Table.Cell>
          <Table.Cell>person detected on Dahua 3</Table.Cell>
          <Table.Cell>Object Detection</Table.Cell>
          <Table.Cell>11:31:00, 1404/07/30</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default BenefitInfoTable;
