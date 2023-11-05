import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function PUT(request, { params }) {
  

  try {
    const { id } = params;
    const data = await request.json();
    const result = await pool.query("UPDATE student SET ? WHERE id = ?", [
      data, 
      params.id,
    ]);

    if(result.affectedRows === 0){
      return NextResponse.json(
        {message : "Producto no encontrado",
        },
        {
          status:404,
        }
      )
    };
    
    const updatedProduct = await pool.query(
      "SELECT * FROM student WHERE ID = ?",
      [params.id]
    );
    
    return NextResponse.json(updatedProduct[0]);

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
    return NextResponse.json({message: 'succesfully deleted'}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
