import numpy as np
import matplotlib.pyplot as plt
from matplotlib.offsetbox import OffsetImage,AnnotationBbox
import analytics

def graph(participants, values, function):
    def get_profile_picture(person):
        path = f"data/ABigBagofLads_y45L9dwTEQ/profile_pictures/{person}.jpg"
        return plt.imread(path)

    def offset_image(coord, person, ax):
        img = get_profile_picture(person)
        im = OffsetImage(img, zoom=0.25)
        im.image.axes = ax
        ab = AnnotationBbox(im, (coord, 0),  xybox=(0., -16.), frameon=False,
                            xycoords='data',  boxcoords="offset points", pad=0.5)
        ax.add_artist(ab)


    fig, ax = plt.subplots()

    ax.bar(range(len(participants)), values, width=0.75, align="center")
    ax.set_xticks(range(len(participants)))
    ax.set_xticklabels(values)
    ax.tick_params(axis='x', which='major', pad=26)

    for i, person in enumerate(participants):
        offset_image(i, person, ax)
    plt.title(f"{function} per Person 2019")
    plt.show()

def messages_per_person_graph():
    results = analytics.messages_per_person()
    graph(results.keys(), results.values(), "Messages")

def reactions_per_person_graph():
    results = analytics.reactions_per_person()
    graph(results.keys(), results.values(), "Reactions")


def reactions_per_message_per_person_graph():
    results = analytics.reactions_per_message_per_person()
    graph(results.keys(), results.values(), "Reactions per Message")

reactions_per_message_per_person_graph()