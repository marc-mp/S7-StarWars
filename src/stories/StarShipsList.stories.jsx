import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StarshipsList from './components/StarshipsList';

const queryClient = new QueryClient();

export default {
  title: 'StarshipsList',
  component: StarshipsList,
  decorators: [
    Story => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

const Template = args => <StarshipsList {...args} />;

export const Default = Template.bind({});