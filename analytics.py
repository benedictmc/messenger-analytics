import json
import datetime
import operator

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
with open("data/ABigBagofLads_y45L9dwTEQ/message_2019.json", "r") as f:
    message_data_2019 = json.load(f)
with open("data/ABigBagofLads_y45L9dwTEQ/message_2018.json", "r") as f:
    message_data_2018 = json.load(f)

def break_messages_into_year(year):
    with open("data/ABigBagofLads_y45L9dwTEQ/message_1.json", "r") as f:
        message_data = json.load(f)

    messages = message_data['messages']
    messages_2018 = {'participants': message_data['participants'], 'messages': [] }

    for i, message in enumerate(messages):
        ms = message['timestamp_ms']
        if ms > start_time_2019:
            continue
        elif ms > start_time_2018:
            messages_2018['messages'].append(message)
        else:
            break

    with open("data/ABigBagofLads_y45L9dwTEQ/message_2018.json", 'w') as f:
        json.dump(messages_2018, f)

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

# newcomers, all_participants_2019 = get_parcipitants_list()

def messages_per_person():
    message_dict = {}
    for message in message_data_2019['messages']:
        sender = message['sender_name']
        if sender not in message_dict.keys():
            message_dict[sender] = 1
        else:
            message_dict[sender] += 1
    return message_dict

# messages_per_person()

def reactions_per_person():
    message_dict = {}
    for message in message_data_2019['messages']:
        sender = message['sender_name']
        if 'reactions' in message.keys():
            reactions_amount = len(message['reactions'])
            if sender not in message_dict.keys():
                message_dict[sender] = reactions_amount
            else:
                message_dict[sender] += reactions_amount
    return message_dict

def reactions_per_message_per_person():
    messages = messages_per_person()
    reactions = reactions_per_person()
    message_dict = {}
    for sender in messages.keys():
        message_dict[sender] =  float(round(reactions[sender]/messages[sender], 2))
    return message_dict

# reactions_per_message_per_person()


def most_reactions_per_message():
    messages = message_data_2019['messages']
    reactions_dict = []
    for message in messages:
        sender = message['sender_name']
        if 'reactions' in message.keys():
            if len(message['reactions']) > 5:
                if 'content' in message.keys():
                    reactions_dict.append({'person': message['sender_name'], 'message': message['content'], 'amount': len(message['reactions'])})
    reactions_dict = sorted(reactions_dict, key = lambda i: i['amount'], reverse=True)
    print(reactions_dict)
    with open("data/reactions.json", 'w') as f:
        json.dump(reactions_dict, f)

# most_reactions_per_message()

def most_reactions_per_photo():
    messages = message_data_2019['messages']
    reactions_dict = []
    for message in messages:
        sender = message['sender_name']
        if 'reactions' in message.keys():
            if len(message['reactions']) > 1:
                if 'photos' in message.keys():
                    reactions_dict.append({'person': message['sender_name'], 'photo': message['photos'], 'amount': len(message['reactions'])})
    reactions_dict = sorted(reactions_dict, key = lambda i: i['amount'], reverse=True)
    with open("data/reactions_photo.json", 'w') as f:
        json.dump(reactions_dict, f)

most_reactions_per_photo()

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