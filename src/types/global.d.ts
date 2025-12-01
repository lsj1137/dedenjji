/// <reference types="react" />

// Error

interface ErrorProps {
  error: Error;
  reset: () => void;
}

// AutoResult

interface Result {
  myId: string;
  myTeamId: number;
  teams: Team[];
  changeName?: (newName: string) => void;
}

interface Team {
  id: number;
  name: string;
  icon: string;
  members: TeamMate[];
}

interface TeamMate {
  id: string;
  name: string;
}

// DdjResult

interface DdjResultType {
  type: string;
  teamType: TeamData;
  myId: string;
  myTeamName: string;
  myTeamId: number;
  teams: Team[];
  changeName?: (newName: string) => void;
}

// DrawList

interface DrawListProps {
  total: number;
  win: number;
}

interface DrawItem {
  x: number;
  y: number;
  color: string;
  num: number;
  angle: number;
  isWinner: boolean;
}

// RspResult;

interface RspResultType {
  myId: string;
  myTeamId: number;
  win: string;
  teams: Team[];
  changeName?: (newName: string) => void;
}

// Button;

interface ButtonProps {
  color?: string;
  textColor?: string;
  content?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

// Card;

interface CardProps {
  color: string;
  borderColor?: string;
  children?: React.ReactNode;
}

// Connects;

interface ConnectsProps {
  currentUser: number;
  totalUsers: number;
  color: string;
}

// Counter;

interface CounterProps {
  objectName: string;
  count: number;
  minimum?: number;
  onChange: (v: number) => void;
}

// Hearder;

interface HeaderProps {
  canPop?: boolean;
  goHomeWhenPop: boolean;
  canSet: boolean;
  onSet?: () => void;
  title: string;
  onPop?: () => void;
}

// Option;

interface OptionProps {
  color: string;
  title?: string;
  content?: string;
  icon?: ReactElement;
}

// autoSplitting;

interface participantsResponse {
  id: string;
  participants: { userId: string; name: string }[];
}

interface teamInfo {
  name: string;
  icon: string;
}

// ddjResultConverter;

interface ddjResponse {
  type: string;
  teamType: string;
  choice: string;
  upside?: [];
  downside?: [];
  abstention?: [];
}

// rspResultConverter;

interface rspResponse {
  type: 'win' | 'lose' | 'draw';
  choice: string;
  winChoice?: string;
  rock?: [];
  scissors?: [];
  paper?: [];
  abstention?: [];
}
