import json
import datetime

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
            print(ms)
            print('Breaking')
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


def reactions_per_message_per_person(messages,reactions):
    for sender in messages.keys():
        print(sender)
        print("Messages:"+str(messages[sender]) )
        print("Reactions:"+str(reactions[sender]) )
        print(reactions[sender]/messages[sender])


messages = messages_per_person()
reactions = reactions_per_person()
reactions_per_message_per_person(messages,reactions)