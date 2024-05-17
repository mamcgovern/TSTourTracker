import json

def main():
    # Prompt the user to fill out the JSON data
    city = input("Enter the city: ")
    night = int(input("Enter the number of nights: "))
    date = input("Enter the date: ")

    songs = []
    num_songs = int(input("Enter the number of songs: "))
    for i in range(num_songs):
        print(f"\nSong {i+1}:")
        title = input("Title: ")
        album = input("Album: ")
        instrument = input("Instrument: ")
        mashup = input("Mashup (true/false): ").lower() == 'true'
        feature = input("Feature (leave blank if none): ")
        if feature == "":
            feature = None

        song_info = {
            "title": title,
            "album": album,
            "instrument": instrument,
            "mashup": mashup,
            "feature": feature
        }
        songs.append(song_info)

    # Load existing JSON data from surpriseSongs.json
    with open("surpriseSongs.json", "r") as file:
        existing_data = json.load(file)

    # Append the new show information to the existing data
    new_show_info = {
        "city": city,
        "night": night,
        "date": date,
        "songs": songs
    }
    existing_data["songs"].append(new_show_info)

    # Write the updated data back to surpriseSongs.json
    with open("surpriseSongs.json", "w") as file:
        json.dump(existing_data, file, indent=4)

    print("JSON data updated successfully.")

if __name__ == "__main__":
    main()
