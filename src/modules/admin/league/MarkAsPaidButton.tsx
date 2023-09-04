import {gql} from '@apollo/client';
import {Button, useToast} from '@chakra-ui/react';
import {useMarkAsPaidMutation} from '@src/generated/graphql';

const MarkAsPaidMutation = gql`
  mutation MarkAsPaid($membership_id: Int!, $paid: Boolean!) {
    updateOneLeagueMember(data: {paid: {set: $paid}}, where: {membership_id: $membership_id}) {
      id
      paid
    }
  }
`;

type MarkAsPaidButtonProps = {
  memberId: number;
  paid: boolean;
  username: string;
  leagueName: string;
};

export function MarkAsPaidButton({memberId, username, paid, leagueName}: MarkAsPaidButtonProps) {
  const [markAsPaid, {loading}] = useMarkAsPaidMutation({
    variables: {membership_id: memberId, paid: !paid},
  });
  const toaster = useToast({position: 'top'});
  return (
    <Button
      variant="outline"
      size="xs"
      isLoading={loading}
      onClick={() => {
        markAsPaid().then(() => {
          toaster({
            description: `Successfully marked ${username} as ${
              paid ? `NOT paid` : `paid`
            } for ${leagueName}`,
          });
        });
      }}
    >
      Flip
    </Button>
  );
}
