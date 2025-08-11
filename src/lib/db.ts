import { sql } from "@vercel/postgres";
import { randomUUID } from "crypto";

export type OrderRow = {
  id: string;
  created_at: string;
  customer_name: string | null;
  phone: string;
  email: string | null;
  message: string | null;
  attachment_filename: string | null;
  attachment_url: string | null;
  status: string; // e.g., 'new' | 'done'
};

export async function ensureSchema() {
  await sql`
    create table if not exists orders (
      id text primary key,
      created_at timestamp with time zone not null default now(),
      customer_name text,
      phone text not null,
      email text,
      message text,
      attachment_filename text
    );
  `;
  // New columns for evolving schema
  await sql`alter table orders add column if not exists status text not null default 'new';`;
  await sql`alter table orders add column if not exists attachment_url text;`;
}

export async function insertOrder(input: {
  customer_name?: string | null;
  phone: string;
  email?: string | null;
  message?: string | null;
  attachment_filename?: string | null;
  attachment_url?: string | null;
}) {
  await ensureSchema();
  const id = randomUUID();
  await sql`
    insert into orders (id, customer_name, phone, email, message, attachment_filename, attachment_url)
    values (${id}, ${input.customer_name || null}, ${input.phone}, ${input.email || null}, ${input.message || null}, ${input.attachment_filename || null}, ${input.attachment_url || null})
  `;
}

export async function updateOrderStatus(id: string, status: 'new' | 'done') {
  await ensureSchema();
  await sql`update orders set status = ${status} where id = ${id}`;
}

export async function listOrders(limit = 50): Promise<OrderRow[]> {
  await ensureSchema();
  const { rows } = await sql<OrderRow>`select id, created_at, customer_name, phone, email, message, attachment_filename, attachment_url, status from orders order by created_at desc limit ${limit}`;
  return rows;
} 