import json
import datetime
import operator
import os

# Author: Benedict McGovern
# Idea:
# Provide a list of functions to return info and stats of messages fo the past year
# Show this data with a series of graphs and charts
# Display this in a web format that can be complied and updated automonulsy
# I would like to design a way to show messages in HTML where the person is clear (Picture shown)
# And also date and context is also shown

# The stats are as follows:
# 1. New comers this year
# 2. Messages per person this year 
# 3. Reactions per person this year (top 5)
# 4. Message with most reactions this year
# 5. Ratio of reactions per message per person
# 6. Picture/Video with most reactions
# 7. Longest "hahahah" string (Might have to show last x messages to give context)
# 8. Longest streak without message
# 9. Latest message ?? 
# 10. Message with most "hahaha" messages after it
# 11. Most used words

start_time_2019 = 1546347661000
start_time_2018 = 1514811661000

start_time_2022 = 1640995200000
start_time_2023 = 1672531200000

if "message_all.json" in os.listdir("data/abigbagoflads_113687358978664/"):
    print("Reading all messages ...")
    with open("data/abigbagoflads_113687358978664/message_all.json", "r") as f:
        message_data = json.load(f)
else:
    print("Compiling all messages ...")
    all_messages = []
    for i in range(1, 15):
        
        with open(f"data/abigbagoflads_113687358978664/message_{i}.json", "r") as f:
            message_data = json.load(f)

        all_messages.extend(message_data["messages"])

    message_data["messages"] = all_messages

    with open("data/abigbagoflads_113687358978664/message_all.json", "w") as f:
        json.dump(message_data, f)


def total_messages_count():
    total_messages = len(message_data["messages"])
    print(f"Total messages are {total_messages}")
    return total_messages


total_messages_count()

def messages_in_year(start_period, end_period):

    message_list = []

    for message in message_data["messages"]:
        ms = message['timestamp_ms']
        if ms > start_period and ms < end_period:
            message_list.append(message)
        else: 
            break

    print(f"Total messages between {start_period} and {end_period} are {len(message_list)}")

    return message_list


messages_2022 = messages_in_year(start_time_2022, start_time_2023)
messages_all = message_data["messages"]


def messages_per_person(messages):
    message_dict = {}

    for message in messages:
        sender = message['sender_name']

        if sender not in message_dict.keys():
            message_dict[sender] = 1
        else:
            message_dict[sender] += 1

    result, count = [], 1
    for key, value in sorted(message_dict.items(), key=lambda item: item[1], reverse=True):
        message_dict_sorted = {}
        message_dict_sorted['position'] = count
        message_dict_sorted['name'] = key
        message_dict_sorted['amount'] = value
        result.append(message_dict_sorted)
        count +=1

    print(f"Messages per person are {result}")
    return result


with open("result.json", "w") as f:
    json.dump(messages_per_person(messages_2022), f, indent=4)


def reactions_per_person(messages):
    message_dict = {}

    for message in messages:

        sender = message['sender_name']
        if 'reactions' in message.keys():
            reactions_amount = len(message['reactions'])
            if sender not in message_dict.keys():
                message_dict[sender] = reactions_amount
            else:
                message_dict[sender] += reactions_amount

    result, count = [], 1
    for key, value in sorted(message_dict.items(), key=lambda item: item[1], reverse=True):
        message_dict_sorted = {}
        message_dict_sorted['position'] =count
        message_dict_sorted['name'] =key
        message_dict_sorted['amount'] =value
        result.append(message_dict_sorted)
        count +=1

    print(f"Reactions per person are {result}")
    return result

with open("result.json", "w") as f:
    json.dump(reactions_per_person(messages_2022), f, indent=4)


def most_reacted_messages(messages):
    reactions_dict = []

    for message in messages:
        if 'reactions' in message.keys():
            if len(message['reactions']) > 5:
                if 'content' in message.keys():
                    reactions_dict.append({'person': message['sender_name'], 'message': message['content'], 'amount': len(message['reactions'])})

    result = sorted(reactions_dict, key = lambda i: i['amount'], reverse=True)

    print(f"Most reacted messages are {result}")
    return result


with open("result.json", "w") as f:
    json.dump(most_reacted_messages(messages_all), f, indent=4)


# most_reactions_per_message()

def most_reacted_photo(messages):
    reactions_dict = []

    for message in messages:
        if 'reactions' in message.keys():
            if len(message['reactions']) > 1:
                if 'photos' in message.keys():
                    reactions_dict.append({'person': message['sender_name'], 'photo': message['photos'], 'amount': len(message['reactions'])})

    result = sorted(reactions_dict, key = lambda i: i['amount'], reverse=True)

    print(f"Most reacted photes are {result}")
    return result


def most_reacted_video(messages):
    reactions_dict = []

    for message in messages:
        if 'reactions' in message.keys():
            if len(message['reactions']) > 1:
                if 'videos' in message.keys():
                    reactions_dict.append({'person': message['sender_name'], 'videos': message['videos'], 'amount': len(message['reactions'])})

    result = sorted(reactions_dict, key = lambda i: i['amount'], reverse=True)

    print(f"Most reacted videos are {result}")
    return result


with open("result.json", "w") as f:
    json.dump(most_reacted_video(messages_all), f, indent=4)


# most_reactions_per_photo()

def longest_string_hahah():
    messages = message_data_2019['messages']
    reactions_dict = []
    longest, longest_message = 0, ''
    is_haha, count, count_save = False, 0, 0
    for i, message in enumerate(messages):
        if 'content' in message.keys():
            content = message['content']
            if set(content).issubset(set(['a', 'h', ' ', 'A' , 'H'])):
                if is_haha:
                    count+=1
                    print(count)
                is_haha = True
                if len(content) > longest:
                    longest = len(content)
                    longest_message = message
            elif is_haha:
                if count > count_save:
                    count_save = count
                count = 0
                is_haha = False

# longest_string_hahah()


def longest_streak_without_message():
    messages = message_data_2019['messages']
    messages_dict = {}
    for i, message in enumerate(messages):
        sender = message['sender_name']
        if sender not in messages_dict:
            messages_dict[sender] = {'diff':0 , 'last': message['timestamp_ms']}
        else:
            diff = ((messages_dict[sender]['last'] - message['timestamp_ms'])/1000)/86400
            if diff > messages_dict[sender]['diff']:
                 messages_dict[sender]['diff'] = diff

            messages_dict[sender]['last'] = message['timestamp_ms']
    print(messages_dict)
    with open("data/message_diff.json", 'w') as f:
        json.dump(messages_dict, f)

# longest_streak_without_message()


def amount_of_messages():
    messages = message_data_2019['messages']
    return len(messages)


def amount_of_parpticatants():
    messages = message_data_2019['messages']
    return len(messages)

def most_messages_in_day():
    messages = message_data_2019['messages']
    messages_dict = {}
    next_day, day, old_day = None, 86400000, None
    largest = -1
    for i, message in enumerate(messages):
        current = message['timestamp_ms']
        if not next_day:
            old_day = current
            messages_dict[old_day] = 1
            next_day = message['timestamp_ms'] - day
        elif current > next_day :
            messages_dict[old_day] += 1
        elif current < next_day :
            old_day = current
            next_day = message['timestamp_ms'] - day
            messages_dict[old_day] = 1
        else:
            print("Shouldnt be here")
    for val in messages_dict.values():
        if val > largest:
            largest = val
    print(f"The most amount of messages in a day was {largest}")
    with open("data/message_per_day.json", 'w') as f:
        json.dump(messages_dict, f)

def newcomers_participants():
    participants_2019, participants_2018 = [], []
    for message in message_data_2019['messages']:
        if message['sender_name'] not in participants_2019:
            participants_2019.append(message['sender_name'])
    for message in message_data_2018['messages']:
        if message['sender_name'] not in participants_2018:
            participants_2018.append(message['sender_name'])    
    newcomers = list(set(participants_2019)- set(participants_2018))
    all_participants_2019 = participants_2019
    return newcomers, all_participants_2019


# most_messages_in_day()