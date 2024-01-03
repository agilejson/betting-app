import { BetStatus } from "@/config/betStatus";
import type { Bookmaker } from "./bookmaker";

export interface Bet {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  bookmakerId: string;
  stake: number;
  potentialReturn: number;
  status: BetStatus;
  prize: number;
  link: string;
}

export interface BetWithBookmaker extends Bet {
  bookmaker: Bookmaker;
}