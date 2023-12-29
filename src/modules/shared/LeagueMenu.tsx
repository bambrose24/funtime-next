import {gql} from '@apollo/client';
import {ChevronDownIcon} from '@chakra-ui/icons';
import {
  Button,
  ButtonProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuProps,
} from '@chakra-ui/react';
import {LeagueMenuFragment, LeagueStatus, MemberRole} from '@src/generated/graphql';
import {useRouter} from 'next/router';

const LeagueMember_LeagueMenuFragment = gql`
  fragment LeagueMenu on LeagueMember {
    id
    role
    leagues {
      id
      league_id
      status
    }
  }
`;

type Props = {
  member: LeagueMenuFragment;
  menuButtonLabel: string;
  buttonProps?: ButtonProps;
};

export function LeagueMenu({member, menuButtonLabel, buttonProps}: Props) {
  const router = useRouter();
  return (
    <Menu>
      <MenuButton as={Button} variant="outline" rightIcon={<ChevronDownIcon />} {...buttonProps}>
        {menuButtonLabel}
      </MenuButton>
      <MenuList>
        {member.role === MemberRole.Admin && (
          <MenuItem
            onClick={() => {
              router.push(`/league/${member.leagues.league_id}/admin`);
            }}
          >
            Manage League (admin only)
          </MenuItem>
        )}
        <MenuItem
          onClick={() => {
            router.push(`/league/${member.leagues.league_id}/standings`);
          }}
        >
          Standings
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push(`/league/${member.leagues.league_id}/edit-profile`);
          }}
        >
          Edit Profile
        </MenuItem>
        {member.leagues.status !== LeagueStatus.NotStarted && (
          <MenuItem
            onClick={() => {
              router.push(`/league/${member.leagues.league_id}/week`);
            }}
          >
            Weekly Picks
          </MenuItem>
        )}
        {member.leagues.status !== LeagueStatus.Done && (
          <MenuItem
            onClick={() => {
              router.push(`/league/${member.leagues.league_id}/pick`);
            }}
          >
            Make Picks
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
}
