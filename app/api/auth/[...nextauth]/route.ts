// app/api/auth/[...nextauth]/route.ts
import { auth } from "@/auth";
import NextAuth from "next-auth";

export const GET = auth;
export const POST = auth;

export const runtime = "nodejs";
