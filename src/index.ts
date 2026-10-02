import { McpServer } from '@modelcontextprotocol/server';
import { serveStdio } from '@modelcontextprotocol/server/stdio';
import * as z from 'zod/v4';

// Notes stored in memory (lost when the server stops)
const notes: string[] = [];

function createServer(): McpServer {
  const server = new McpServer({ name: 'notes', version: '1.0.0' });

  server.registerTool(
    'add_note',
    {
      description: 'Store a short text note in memory',
      inputSchema: z.object({
        text: z.string().min(1).max(500).describe('The note text')
      })
    },
    async ({ text }) => {
      notes.push(text);
      return { content: [{ type: 'text', text: `Note saved (${notes.length} total).` }] };
    }
  );

  server.registerTool(
    'list_notes',
    {
      description: 'Return all stored notes',
      inputSchema: z.object({})
    },
    async () => {
      const result = notes.length === 0
        ? 'No notes yet.'
        : notes.map((n, i) => `${i + 1}. ${n}`).join('\n');
      return { content: [{ type: 'text', text: result }] };
    }
  );

  return server;
}

void serveStdio(createServer);
console.error('notes MCP server running on stdio');