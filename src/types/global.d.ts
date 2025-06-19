// AutoResult

export interface Result {
  myId: string;
  myTeamId: number;
  teams: Team[];
  changeName?: (newName: string) => void;
}

export interface Team {
  id: number;
  name: string;
  icon: string;
  members: TeamMate[];
}

export interface TeamMate {
  id: string;
  name: string;
}

// DdjResult

export type DdjResultType = {
  type: string;
  myId: string;
  myTeamName: string;
  myTeamId: number;
  teams: Team[];
  changeName?: (newName: string) => void;
};

// DrawList

type DrawListProps = {
  total: number;
  win: number;
};

type DrawItem = {
  x: number;
  y: number;
  color: string;
  num: number;
  angle: number;
  isWinner: boolean;
};

// RspResult;

export type RspResultType = {
  myId: string;
  myTeamId: number;
  win: string;
  teams: Team[];
  changeName?: (newName: string) => void;
};

// Button;

type ButtonProps = {
  color?: string;
  textColor?: string;
  content?: string;
  children?: React.ReactNode;
  onClick: () => void;
};

// Card;

type CardProps = {
  color: string;
  borderColor?: string;
  children?: React.ReactNode;
};

// Connects;

type ConnectsProps = {
  currentUser: number;
  totalUsers: number;
  color: string;
};

// Counter;

type CounterProps = {
  objectName: string;
  count: number;
  minimum?: number;
  onChange: (v: number) => void;
};

// Hearder;

type HeaderProps = {
  goHome: boolean;
  canSet: boolean;
  onSet?: () => void;
  title: string;
};

// Option;

type OptionProps = {
  color: string;
  title?: string;
  content?: string;
  icon?: ReactElement;
};

// autoSplitting;

type participantsResponse = { id: string; participants: { userId: string; name: string }[] };
type teamInfo = { name: string; icon: string };

// ddjResultConverter;

export type ddjResponse = {
  type: string;
  choice: string;
  upside?: [];
  downside?: [];
  abstention?: [];
};

// rspResultConverter;

export type rspResponse = {
  type: 'win' | 'lose' | 'draw';
  choice: string;
  winChoice?: string;
  rock?: [];
  scissors?: [];
  paper?: [];
  abstention?: [];
};
