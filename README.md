<img src="https://i.postimg.cc/hjcLgDYn/2024-04-17-02-00-23.png">

<h1>The Concept of this Digital Clock  </h1>
Initialization: The function begins by creating a Date object to obtain the current time.

Time Formatting: It extracts the current hour, minutes, and seconds from the Date object. It also initializes the session variable to "AM", indicating the time of day (morning or afternoon).

Time Adjustment: If the hour is 0 (midnight), it sets the hour to 12 (for 12-hour clock format). If the hour is greater than 12, it subtracts 12 to convert it to 12-hour clock format and changes the session variable to "PM".

Zero Padding: The hour, minutes, and seconds are formatted to ensure they are displayed as two digits. For example, 9:5:2 becomes 09:05:02.

Display Update: The formatted time is then displayed on the web page. It selects the HTML element with the ID clock and updates its text content to reflect the current time.

Continuous Update: The setTimeout() function is used to call the time() function recursively every second, ensuring that the displayed time is continuously updated.
