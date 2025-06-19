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

type DdjResultType = {
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

type RspResultType = {
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

type ddjResponse = {
  type: string;
  choice: string;
  upside?: [];
  downside?: [];
  abstention?: [];
};

// rspResultConverter;

type rspResponse = {
  type: 'win' | 'lose' | 'draw';
  choice: string;
  winChoice?: string;
  rock?: [];
  scissors?: [];
  paper?: [];
  abstention?: [];
};
