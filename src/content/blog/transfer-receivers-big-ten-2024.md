---
title: '2024 transfer receivers production in Big Ten'
slug: '2024-transfer-receiver-production-big-ten'
description: 'A look at receivers who transfered to a new team in 2024 and play in the Big Ten. Trying to answer the question, how many receivers had better production after they transfered. '
pubDate: 'January 27, 2025'
author: 'Gary Ditsch'
tags: ['Huskers', 'Wide Receivers']
---

If you look at my post on [More analysis of the 2024 receiver production](/blog/more-analysis-2024-receiver-production), one of my takes is that the receiver group will be better in 2025 because they will have better coaching. 

One of the pieces of evidence I shared was a look at how transfer receivers did after transferring to Nebraska the past two years.

TL;DR they had less production and performed worse then they had previously, at other schools. One comment on this take was that it was not just due to Nebraska's coaching, but those players having to step up their level of competition by playing in the Big Ten.

So I pulled all the Big Ten receivers this year. I then went and pulled all the players who played in a different conference last year. The one oddity in this data set is that all of the Pac 12 players came out in this data set, so I removed any player who was at USC, UCLA, Oregon and Washington last year and this year. There are a few players who moved between those schools, which I kept. 

The table below is that data set. 

The green rows are players who did better this year than last year (12 of 32). The players are grouped so you can see both years of their performances. 

Interestingly, I think the comment has some truth to it. There were not too many players who had great years that fit into this category. 

The standouts were Zakhari Franklin at Illinois, Neyor from Nebraska, and I would add Jo'quavious Marks from Mississippi State (who doubled his receiving yards as a running back).

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>Season</th>
      <th>player_id</th>
      <th>Name</th>
      <th>Team</th>
      <th>Conference</th>
      <th>category</th>
      <th>stat_type</th>
      <th>Receiving Yards</th>
      <th>Player Number</th>
      <th>Unnamed: 9</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2023</td>
      <td>4366640</td>
      <td>Solomon Vanhorse</td>
      <td>James Madison</td>
      <td>Sun Belt</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>7</td>
      <td>1</td>
      <td>NaN</td>
    </tr>
    <tr style="background-color: #d4edda;">
      <td>2024</td>
      <td>4366640</td>
      <td>Solomon Vanhorse</td>
      <td>Indiana</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>14</td>
      <td>1</td>
      <td>x</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4367069</td>
      <td>Ty Son Lawton</td>
      <td>James Madison</td>
      <td>Sun Belt</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>174</td>
      <td>2</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4367069</td>
      <td>Ty Son Lawton</td>
      <td>Indiana</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>114</td>
      <td>2</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4426357</td>
      <td>Kyle Ford</td>
      <td>UCLA</td>
      <td>Pac-12</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>203</td>
      <td>3</td>
      <td>NaN</td>
    </tr>
    <tr style="background-color: #d4edda;">
      <td>2024</td>
      <td>4426357</td>
      <td>Kyle Ford</td>
      <td>USC</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>258</td>
      <td>3</td>
      <td>x</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4426484</td>
      <td>Marcus Major</td>
      <td>Oklahoma</td>
      <td>Big 12</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>75</td>
      <td>4</td>
      <td>NaN</td>
    </tr>
    <tr style="background-color: #d4edda;">
      <td>2024</td>
      <td>4426484</td>
      <td>Marcus Major</td>
      <td>Minnesota</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>144</td>
      <td>4</td>
      <td>x</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4426530</td>
      <td>Kay'Ron Adams</td>
      <td>Massachusetts</td>
      <td>FBS Independents</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>118</td>
      <td>5</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4426530</td>
      <td>Kay'Ron Adams</td>
      <td>Michigan State</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>85</td>
      <td>5</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4427225</td>
      <td>Zakhari Franklin</td>
      <td>Ole Miss</td>
      <td>SEC</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>38</td>
      <td>6</td>
      <td>NaN</td>
    </tr>
    <tr style="background-color: #d4edda;">
      <td>2024</td>
      <td>4427225</td>
      <td>Zakhari Franklin</td>
      <td>Illinois</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>619</td>
      <td>6</td>
      <td>x</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4428116</td>
      <td>Isaiah Neyor</td>
      <td>Texas</td>
      <td>Big 12</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>14</td>
      <td>7</td>
      <td>NaN</td>
    </tr>
    <tr style="background-color: #d4edda;">
      <td>2024</td>
      <td>4428116</td>
      <td>Isaiah Neyor</td>
      <td>Nebraska</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>455</td>
      <td>7</td>
      <td>x</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4429059</td>
      <td>Jo'quavious Marks</td>
      <td>Mississippi State</td>
      <td>SEC</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>167</td>
      <td>8</td>
      <td>NaN</td>
    </tr>
    <tr style="background-color: #d4edda;">
      <td>2024</td>
      <td>4429059</td>
      <td>Jo'quavious Marks</td>
      <td>USC</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>321</td>
      <td>8</td>
      <td>x</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4429618</td>
      <td>Justice Ellison</td>
      <td>Wake Forest</td>
      <td>ACC</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>61</td>
      <td>9</td>
      <td>NaN</td>
    </tr>
    <tr style="background-color: #d4edda;">
      <td>2024</td>
      <td>4429618</td>
      <td>Justice Ellison</td>
      <td>Indiana</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>84</td>
      <td>9</td>
      <td>x</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4429963</td>
      <td>Jeremiah Hunter</td>
      <td>California</td>
      <td>Pac-12</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>675</td>
      <td>10</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4429963</td>
      <td>Jeremiah Hunter</td>
      <td>Washington</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>412</td>
      <td>10</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4430656</td>
      <td>Myles Price</td>
      <td>Texas Tech</td>
      <td>Big 12</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>410</td>
      <td>11</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4430656</td>
      <td>Myles Price</td>
      <td>Indiana</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>410</td>
      <td>11</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4569086</td>
      <td>Charles Ross</td>
      <td>San José State</td>
      <td>Mountain West</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>300</td>
      <td>12</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4569086</td>
      <td>Charles Ross</td>
      <td>USC</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>11</td>
      <td>12</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4570683</td>
      <td>Kam Brown</td>
      <td>UCLA</td>
      <td>Pac-12</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>163</td>
      <td>13</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4570683</td>
      <td>Kam Brown</td>
      <td>Purdue</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>87</td>
      <td>13</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4570738</td>
      <td>Ke'Shawn Williams</td>
      <td>Wake Forest</td>
      <td>ACC</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>384</td>
      <td>14</td>
      <td>NaN</td>
    </tr>
    <tr style="background-color: #d4edda;">
      <td>2024</td>
      <td>4570738</td>
      <td>Ke'Shawn Williams</td>
      <td>Indiana</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>403</td>
      <td>14</td>
      <td>x</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4571935</td>
      <td>Jahmal Banks</td>
      <td>Wake Forest</td>
      <td>ACC</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>653</td>
      <td>15</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4571935</td>
      <td>Jahmal Banks</td>
      <td>Nebraska</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>508</td>
      <td>15</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4685230</td>
      <td>Miles Cross</td>
      <td>Ohio</td>
      <td>Mid-American</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>599</td>
      <td>16</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4685230</td>
      <td>Miles Cross</td>
      <td>Indiana</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>323</td>
      <td>16</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4685565</td>
      <td>Evan Stewart</td>
      <td>Texas A&M</td>
      <td>SEC</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>514</td>
      <td>17</td>
      <td>NaN</td>
    </tr>
    <tr style="background-color: #d4edda;">
      <td>2024</td>
      <td>4685565</td>
      <td>Evan Stewart</td>
      <td>Oregon</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>613</td>
      <td>17</td>
      <td>x</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4685702</td>
      <td>Quinshon Judkins</td>
      <td>Ole Miss</td>
      <td>SEC</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>135</td>
      <td>18</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4685702</td>
      <td>Quinshon Judkins</td>
      <td>Ohio State</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>109</td>
      <td>18</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4688552</td>
      <td>Keleki Latu</td>
      <td>Nevada</td>
      <td>Mountain West</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>179</td>
      <td>19</td>
      <td>NaN</td>
    </tr>
    <tr style="background-color: #d4edda;">
      <td>2024</td>
      <td>4688552</td>
      <td>Keleki Latu</td>
      <td>Washington</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>342</td>
      <td>19</td>
      <td>x</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4696044</td>
      <td>Kaelon Black</td>
      <td>James Madison</td>
      <td>Sun Belt</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>204</td>
      <td>20</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4696044</td>
      <td>Kaelon Black</td>
      <td>Indiana</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>6</td>
      <td>20</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4702555</td>
      <td>Jonah Coleman</td>
      <td>Arizona</td>
      <td>Pac-12</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>282</td>
      <td>21</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4702555</td>
      <td>Jonah Coleman</td>
      <td>Washington</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>170</td>
      <td>21</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4711421</td>
      <td>C.J. Smith</td>
      <td>Georgia</td>
      <td>SEC</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>116</td>
      <td>22</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4711421</td>
      <td>C.J. Smith</td>
      <td>Purdue</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>69</td>
      <td>22</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4712578</td>
      <td>Jay Fair</td>
      <td>Auburn</td>
      <td>SEC</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>300</td>
      <td>23</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4712578</td>
      <td>Jay Fair</td>
      <td>USC</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>78</td>
      <td>23</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4832827</td>
      <td>Jack Velling</td>
      <td>Oregon State</td>
      <td>Pac-12</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>438</td>
      <td>24</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4832827</td>
      <td>Jack Velling</td>
      <td>Michigan State</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>411</td>
      <td>24</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4870713</td>
      <td>Rico Flores</td>
      <td>Notre Dame</td>
      <td>FBS Independents</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>392</td>
      <td>25</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4870713</td>
      <td>Rico Flores</td>
      <td>UCLA</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>187</td>
      <td>25</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4877824</td>
      <td>Zach Horton</td>
      <td>James Madison</td>
      <td>Sun Belt</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>266</td>
      <td>26</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4877824</td>
      <td>Zach Horton</td>
      <td>Indiana</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>182</td>
      <td>26</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>4880236</td>
      <td>Will Kacmarek</td>
      <td>Ohio</td>
      <td>Mid-American</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>243</td>
      <td>27</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>4880236</td>
      <td>Will Kacmarek</td>
      <td>Ohio State</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>58</td>
      <td>27</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>5081907</td>
      <td>Anthony Frias II</td>
      <td>Kansas State</td>
      <td>Big 12</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>5</td>
      <td>28</td>
      <td>NaN</td>
    </tr>
    <tr style="background-color: #d4edda;">
      <td>2024</td>
      <td>5081907</td>
      <td>Anthony Frias II</td>
      <td>UCLA</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>18</td>
      <td>28</td>
      <td>x</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>5081926</td>
      <td>Tawee Walker</td>
      <td>Oklahoma</td>
      <td>Big 12</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>69</td>
      <td>29</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>5081926</td>
      <td>Tawee Walker</td>
      <td>Wisconsin</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>21</td>
      <td>29</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>5082648</td>
      <td>Bryce Pierre</td>
      <td>Arizona State</td>
      <td>Pac-12</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>139</td>
      <td>30</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>5082648</td>
      <td>Bryce Pierre</td>
      <td>UCLA</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>94</td>
      <td>30</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>5088338</td>
      <td>Elijah Sarratt</td>
      <td>James Madison</td>
      <td>Sun Belt</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>1076</td>
      <td>31</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2024</td>
      <td>5088338</td>
      <td>Elijah Sarratt</td>
      <td>Indiana</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>890</td>
      <td>31</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>2023</td>
      <td>5150377</td>
      <td>Tyler Williams</td>
      <td>Georgia</td>
      <td>SEC</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>4</td>
      <td>32</td>
      <td>NaN</td>
    </tr>
    <tr style="background-color: #d4edda;">
      <td>2024</td>
      <td>5150377</td>
      <td>Tyler Williams</td>
      <td>Minnesota</td>
      <td>Big Ten</td>
      <td>receiving</td>
      <td>YDS</td>
      <td>8</td>
      <td>32</td>
      <td>x</td>
    </tr>
  </tbody>
</table>

<style>
  table th:nth-child(2),
  table td:nth-child(2), /* Hides player_id */
  table th:nth-child(7),
  table td:nth-child(7), /* Hides stat_type */
  table th:nth-child(10),
  table td:nth-child(10) /* Hides Unnamed: 9 */ {
    display: none;
  }
</style>