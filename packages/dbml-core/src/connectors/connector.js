import { fetchSchemaJson as fetchPostgresSchemaJson } from './postgresConnector';
import { fetchSchemaJson as fetchMssqlSchemaJson } from './mssqlConnector';

const fetchSchemaJson = async (connection, format) => {
  switch (format) {
    case 'postgres':
      return fetchPostgresSchemaJson(connection);
    case 'mssql':
      return fetchMssqlSchemaJson(connection);
    default:
      throw new Error(`Unsupported connection format: ${format}`);
  }
};

export {
  fetchSchemaJson,
};
