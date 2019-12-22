from analytics import *
import json


overall_stats = ['message_total', 'participant_total', 'participant_newcomers']
newcomers, all_participants_2019 = newcomers_participants()
message_total = amount_of_messages()

data = {
    'overall_stats' : {
        'message_total': message_total,
        'participant_total': all_participants_2019,
        'participant_newcomers': newcomers
    },
    'messages_per_person' : messages_per_person(),
    'reactions_per_person' : reactions_per_person(),
}

## Printing and saving data
print(data)
with open('front_end/messenger-front-end/src/assets/results.json','w') as f:
    json.dump(data, f, indent=4)