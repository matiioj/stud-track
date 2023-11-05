import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
  try {
    const results = await pool.query("SELECT * FROM student");
    return NextResponse.json(results[0]);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const { name, surname, birthdate } = await request.json();
    console.log(name, surname, birthdate);

    const result = await pool.query("INSERT INTO student SET ?", {
      name,
      surname,
      birthdate
    });

    return NextResponse.json({ 
      name, 
      surname, 
      birthdate,
      id: result.insertedId 
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}