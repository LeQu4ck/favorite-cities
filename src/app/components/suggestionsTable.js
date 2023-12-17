import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function SuggestionsTable({ suggestions }) {
  return (
    <TableContainer>
      {" "}
      <Table variant="striped">
        <TableCaption>Suggestions</TableCaption>
        <Thead>
          <Tr>
            <Th>City name</Th>
            <Th>Longitude</Th>
            <Th>Latitude</Th>
            <Th>Country</Th>
          </Tr>
        </Thead>
        <Tbody>
          {suggestions.map((suggestion, index) => (
            <Tr key={index}>
              <Td>{suggestion.name}</Td>
              <Td>{suggestion.longitude}</Td>
              <Td>{suggestion.latitude}</Td>
              <Td>{suggestion.country}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
