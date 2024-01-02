export const dummyHL7Messages = [
  {
    id: 1,
    host: 'SourceSystem1',
    correlationId: 'abc123',
    message: 'MSH|^~\\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|20230101120000||ADT^A01|123456789|P|2.3|||',
    timestamp: '2023-01-01T12:00:00Z',
    status: 'sent',
  },
  {
    id: 2,
    host: 'SourceSystem2',
    correlationId: 'xyz789',
    message: 'MSH|^~\\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|20230101120500||ADT^A01|987654321|P|2.3|||',
    timestamp: '2023-01-01T12:05:00Z',
    status: 'delivered',
  },
  {
    id: 3,
    host: 'SourceSystem3',
    correlationId: 'def456',
    message: 'MSH|^~\\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|20230101121000||ADT^A01|456789012|P|2.3|||',
    timestamp: '2023-01-01T12:10:00Z',
    status: 'sent',
  },
  {
    id: 4,
    host: 'SourceSystem4',
    correlationId: 'ghi789',
    message: 'MSH|^~\\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|20230101121500||ADT^A01|345678901|P|2.3|||',
    timestamp: '2023-01-01T12:15:00Z',
    status: 'delivered',
  },
  {
    id: 5,
    host: 'SourceSystem1',
    correlationId: 'jkl012',
    message: 'MSH|^~\\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|20230101122000||ADT^A01|234567890|P|2.3|||',
    timestamp: '2023-01-01T12:20:00Z',
    status: 'sent',
  },
  {
    id: 6,
    host: 'SourceSystem2',
    correlationId: 'mno345',
    message: 'MSH|^~\\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|20230101122500||ADT^A01|678901234|P|2.3|||',
    timestamp: '2023-01-01T12:25:00Z',
    status: 'delivered',
  },
  {
    id: 7,
    host: 'SourceSystem3',
    correlationId: 'pqr567',
    message: 'MSH|^~\\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|20230101123000||ADT^A01|345612789|P|2.3|||',
    timestamp: '2023-01-01T12:30:00Z',
    status: 'sent',
  },
  {
    id: 8,
    host: 'SourceSystem4',
    correlationId: 'stu890',
    message: 'MSH|^~\\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|20230101123500||ADT^A01|901234567|P|2.3|||',
    timestamp: '2023-01-01T12:35:00Z',
    status: 'delivered',
  },
  {
    id: 9,
    host: 'SourceSystem1',
    correlationId: 'vwx901',
    message: 'MSH|^~\\&|SENDING_APP|SENDING_FACILITY|RECEIVING_APP|RECEIVING_FACILITY|20230101124000||ADT^A01|567890123|P|2.3|||',
    timestamp: '2023-01-01T12:40:00Z',
    status: 'sent',
  },
];