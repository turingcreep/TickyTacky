What is a markov decision process?

A markov decision process has :-

1. A set of allowed states
2. A set of actions available at each state
3. A probability function of state transitions over actions at that particular state
4. A reward map from one state to another
5. Y - The discount factor : Ration of importance of future reward relative ot present reward.

The core problem of MDPs is to find a policy for decision maker: a function π that specifices the action π(s) that the decison maker will choose when in state s. Note that once a markov decision process is combined with a policy this way, this fixes the action for each state and the resulting combination behaves like a markov chain.

for instance let's teach a tic-tac-toe ai to win
