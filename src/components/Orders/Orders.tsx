import { Switch, useHistory, useRouteMatch } from 'react-router-dom';
import Spacings from '@commercetools-uikit/spacings';
import { SuspendedRoute } from '@commercetools-frontend/application-shell';
import ChannelDetails from '../OrderDetails';
import TableReports from '../TableReports';

const Channels = () => {
  const match = useRouteMatch();
  const { push } = useHistory();

  return (
    <Spacings.Stack scale="xl">
      {/* {loading && <LoadingSpinner />} */}

      <Spacings.Stack scale="l">
        <TableReports />
        <Switch>
          <SuspendedRoute path={`${match.path}/:id`}>
            <ChannelDetails onClose={() => push(`${match.url}`)} />
          </SuspendedRoute>
        </Switch>
      </Spacings.Stack>
    </Spacings.Stack>
  );
};
Channels.displayName = 'Channels';

export default Channels;
