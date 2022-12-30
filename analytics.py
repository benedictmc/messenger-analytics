import json
import datetime
import operator
import os
import codecs 

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
    with open("data/abigbagoflads_113687358978664/message_all.json", "r") as f:
        message_data = json.load(f)
else:
    all_messages = []
    for i in range(1, 15):
        
        with open(f"data/abigbagoflads_113687358978664/message_{i}.json", "r") as f:
            message_data = json.load(f)

        all_messages.extend(message_data["messages"])

    message_data["messages"] = all_messages

    with open("data/abigbagoflads_113687358978664/message_all.json", "w") as f:
        json.dump(message_data, f)

def decode_unicode(string):

    return string.encode('latin-1').decode('utf-8')

def sort_reactions(reactions):
    react_dict, react_list = {}, []

    for reaction in reactions:
        if decode_unicode(reaction["reaction"]) not in react_dict:
            react_dict[decode_unicode(reaction["reaction"])] = 1
        else:
            react_dict[decode_unicode(reaction["reaction"])] += 1

    for k, v in react_dict.items():
        react_list.append({
            "reaction" : k,
            "amount": v
        })
        
    return react_list


def total_messages_count():
    total_messages = len(message_data["messages"])
    return total_messages


def messages_in_year(start_period, end_period):

    message_list = []

    for message in message_data["messages"]:
        ms = message['timestamp_ms']
        if ms > start_period and ms < end_period:
            message_list.append(message)
        else: 
            break


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

    return result


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

    return result


def most_reacted_messages(messages):
    reactions_dict = []

    for message in messages:
        if 'reactions' in message.keys():
            if len(message['reactions']) > 5:
                if 'content' in message.keys():
                    reactions_dict.append({'person': message['sender_name'], 'message': decode_unicode(message['content']), 'reactions': sort_reactions(message['reactions']),  'amount': len(message['reactions'])})

    result = sorted(reactions_dict, key = lambda i: i['amount'], reverse=True)

    return result


def most_reacted_photo(messages):
    reactions_dict = []
    reacted_photo = False
    prev_message = None

    for message in messages:

        if reacted_photo and 'content' in message.keys():
            reactions_dict[-1]["message_after"] = f"{message['content']} - {message['sender_name']}"
            reacted_photo = False

        if 'reactions' in message.keys():
            if len(message['reactions']) > 1:
                if 'photos' in message.keys():

                    reactions_dict.append({'person': message['sender_name'], 'photo': message['photos'], 'reactions': message['reactions'], 'amount': len(message['reactions'])})

                    if 'content' in prev_message.keys():
                        reactions_dict[-1]["message_before"] = f"{prev_message['content']} - {prev_message['sender_name']}"

                    reacted_photo = True

        prev_message = message


    result = sorted(reactions_dict, key = lambda i: i['amount'], reverse=True)

    return result


def most_reacted_video(messages):
    reactions_dict = []

    for message in messages:
        if 'reactions' in message.keys():
            if len(message['reactions']) > 1:
                if 'videos' in message.keys():
                    reactions_dict.append({'person': message['sender_name'], 'videos': message['videos'], 'amount': len(message['reactions'])})

    result = sorted(reactions_dict, key = lambda i: i['amount'], reverse=True)

    return result


def longest_string_hahah(messages):

    reactions_dict = []
    longest, longest_message = 0, ''
    is_haha, count, count_save = False, 0, 0
    for i, message in enumerate(messages):
        if 'content' in message.keys():
            content = message['content']
            if set(content).issubset(set(['a', 'h', ' ', 'A' , 'H'])):
                if is_haha:
                    count+=1
                is_haha = True
                if len(content) > longest:
                    longest = len(content)
                    longest_message = message
            elif is_haha:
                if count > count_save:
                    count_save = count
                count = 0
                is_haha = False

    return longest_message


def messages_per_day(messages):

    messages_dict = {}

    for message in messages:
        ts = message["timestamp_ms"]
        day = int(ts/86400000)*86400000
        dt = datetime.datetime.fromtimestamp(day / 1000.0)
        date_time = dt.strftime('%Y-%m-%d %H:%M:%S')
        if date_time in messages_dict:
            messages_dict[date_time] +=1
        else:
            messages_dict[date_time] = 1

    result = sorted(messages_dict.items(), key=lambda x: x[1], reverse=True)
    return result


