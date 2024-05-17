import json

def update_song_played_status(json_file, song_title):
    # Load the JSON data from the file
    with open(json_file, 'r') as f:
        data = json.load(f)

    # Convert input song title to lowercase for case-insensitive comparison
    song_title_lower = song_title.lower()

    # Iterate through each song in the discography
    song_found = False
    for album_data in data:
        for song in album_data['songs']:
            # Convert current song title to lowercase for case-insensitive comparison
            current_song_title_lower = song['title'].lower()

            # Check if the current song title matches the one we're looking for
            if current_song_title_lower == song_title_lower:
                # Update the "played" status to true
                song['played'] = True
                song_found = True
                break  # No need to continue searching

    if not song_found:
        mashuptitle = input("Song not found. Try again: ")
        update_song_played_status(json_file, mashuptitle)
        return

    # Write the updated data back to the JSON file
    with open(json_file, 'w') as f:
        json.dump(data, f, indent=4)

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
        if mashup :
            num_songs_in_mashup = int(input("How many songs were in the mashup? "))
            for j in range(num_songs_in_mashup): 
                print(f"\nSong {i+1}:")
                mashuptitle = input("Title: ")
                update_song_played_status('discography.json', mashuptitle)
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
