from analytics import *
import json


messages_2022 = messages_in_year(start_time_2022, start_time_2023)
messages_all = message_data["messages"]

data = {
    'alltime_stats' : {
        'message_total': total_messages_count(),
        'total_days': len(messages_per_day(messages_all)),
        'average_messages_per_day': int(total_messages_count()/len(messages_per_day(messages_all))),
        'most_amount_of_messages_day': messages_per_day(messages_all)[0],
        'most_amount_of_messages_person': messages_per_person(messages_all)[0],
        'longest_laugh': longest_string_hahah(messages_all),
    },
    'year_stats' : {
        'message_total': len(messages_2022),
        'average_messages_per_day': int(len(messages_2022)/len(messages_per_day(messages_2022))),
        'most_amount_of_messages_day': messages_per_day(messages_2022)[0],
        'most_amount_of_messages_person': messages_per_person(messages_2022)[0],
        'longest_laugh': longest_string_hahah(messages_2022),
    },
    'most_reacted_messages' : most_reacted_messages(messages_2022),
    'most_reacted_photo' : most_reacted_photo(messages_2022),
}

## Printing and saving data
# print(data)
with open('data.json','w') as f:
    json.dump(data, f, indent=4)

with open('front-end/src/data.json','w') as f:
    json.dump(data, f, indent=4)