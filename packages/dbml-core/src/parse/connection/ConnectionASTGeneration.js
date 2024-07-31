import PostgresConnectionASTGen from './postgres/PostgresConnectionASTGen';

function fetchSchema (connection, format) {
  let database = null;

  switch (format) {
    case 'postgres': {
      database = new PostgresConnectionASTGen().fetchSchema(connection);

      break;
    }
    default:
      throw new Error(`Format not supported: ${format}`);
  }
  return database;
}

export {
  fetchSchema,
};
