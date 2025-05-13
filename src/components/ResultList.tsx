import { Team } from '@/app/auto/result/AutoResult';

export default function ResultList({ teams }: { teams: Team[] }) {
  return (
    <div className=" flex flex-col w-[calc(100%-40px)] p-5 bg-white rounded-[10px] my-[30px]">
      {teams.map((team, i) => (
        <div className="flex flex-col w-full items-center text-center" key={i}>
          <div className="flex flex-col gap-2">
            <p>
              {team.icon} {team.name} 팀
            </p>
            <div className="flex justify-center gap-1">
              {team.members.map((member, j) => (
                <p key={j}>
                  {member.nickname}
                  {j !== team.members.length - 1 ? ',' : ''}
                </p>
              ))}
            </div>
          </div>
          {i !== teams.length - 1 && <hr className="w-full my-4" style={{ color: 'gray' }} />}
        </div>
      ))}
    </div>
  );
}
