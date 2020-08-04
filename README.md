# Tracker Build 
The project has been to build a website to allow people to follow me when I go cycling. This was to be done via a webiste were the user can click a button on a page in which a google map will be rendered with my current position and previous positions saved during ride. In addition I will be building the GPS tracker from teh hardware up in order to resarch GPS, and Celular communication. You can see pictures of the project and list of hardware bwlow.


## Interesting Resarch 
The Neo-6m connects to the Arduino and send the following information which can be parsed into the following information.

EXAMPLE STRING - $GPGGA,110617.00,41XX.XXXXX,N,00831.54761,W,1,05,2.68,129.0,M,50.1,M,,*42

    110617 – represents the time at which the fix location was taken, 11:06:17 UTC
    41XX.XXXXX,N – latitude 41 deg XX.XXXXX’ N
    00831.54761,W – Longitude 008 deg 31.54761′ W
    1 – fix quality (0 = invalid; 1= GPS fix; 2 = DGPS fix; 3 = PPS fix; 4 = Real Time Kinematic; 5 = Float RTK; 6 = estimated (dead reckoning); 7 = Manual input mode; 8 = Simulation mode)
    05 – number of satellites being tracked
    2.68 – Horizontal dilution of position
    129.0, M – Altitude, in meters above the sea level
    50.1, M – Height of geoid (mean sea level) above WGS84 ellipsoid
    empty field – time in seconds since last DGPS update
    empty field – DGPS station ID number
    *42 – the checksum data, always begins with *

The other NMEA sentences provide additional information:

    $GPGSA – GPS DOP and active satellites - $GPGSA,A,3,06,04,17,01,19,03,22,09,,,,,2.62,1.17,2.34*01

    $GPGSV – Detailed GPS satellite information - $GPGSV,3,2,12,06,41,303,27,09,39,203,21,12,05,327,,17,39,239,20*7A

    $GPGLL – Geographic Latitude and Longitude - $GPGLL,5132.37764,N,00002.78356,W,170750.00,A,A*76

    $GPRMC – Essential GPS pvt (position, velocity, time) data - $GPRMC,170751.00,A,5132.37768,N,00002.78347,W,0.110,,240720,,,A*61

    $GPVTG – Velocity made good - $GPVTG,,T,,M,0.291,N,0.538,K,A*27


