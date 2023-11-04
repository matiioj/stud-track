import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function PUT(request, { params }) {
  const data = await request.json();

  try {
    const { id } = params;

    await pool.query("UPDATE student SET ? WHERE id = ?", [data, id]);
    return NextResponse.json({
      ...data,
      id: params.id,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
export async function GET(request, { params }) {

  try {
    const { id } = params;

    const result = await pool.query("SELECT * FROM student WHERE id = ?", [
      id
    ]);
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await pool.query("DELETE FROM student WHERE id = ?", [id]);
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
