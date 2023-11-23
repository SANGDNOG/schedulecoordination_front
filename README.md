# 내일 뭐해?

[📝보고서](https://docs.google.com/document/d/1Fdgzn2Ri8FAZvxWaU5PZWiC2gWi3gsTZrB334nbdbX8/edit)

[🎥영상](https://clipchamp.com/watch/OG4pIHk1qXm)

## 제작한 소프트웨어에 대한 설명

> 소프트웨어의 기능

- 일정 공유 및 조정 프로그램

- 모든 구성원이 공용의 달력에 모임이 가능한 시간을 표시하여, 겹치는 시간을 직관적으로 알 수 있음.

- 직관적인 자료를 바탕으로 보다 쉽게 모임 시간을 조정할 수 있음.

- 쿠키와 세션을 통해 로그인한 유저에 정보를 가져오는 기능을 구현함

> 설치 및 실행 방법

우선 호스트가 서버를 실행하는 과정입니다.

![](https://lh7-us.googleusercontent.com/Lyq2rjYDWSeaxgJScNDSlHOXM5kkL_BRizd6e-8K-vV7ru1JDc-ylO-QlMoDB5WqzheH5j3BpddO6ZGIdi4MFsGzcDWNql4U6XRwuhQM7A_ttPOR7N4s2sfOYg8R94GLAggKZY_h_MxjIq0mSonchGc)

- 위와같이 mongodb를 실행합니다.

![](https://lh7-us.googleusercontent.com/qb1-RYvKnUdTtbTdvX5RvnczCzs6mSrtfT_ro_pCiyTMecQQSMV1tYRqsxIrApfD72TygMHPvOiY9eXAw9cqFj6nJ8_lVAIMg1ZGb-NMFpyj3mtTBLCraTZoh6ZC--0TWdwGvRPZ0iL-TUrGxaY53WU)

- 위와같이 서버가 실행된 모습입니다.

![](https://lh7-us.googleusercontent.com/a2OQse6bkw0va-950yyG3QnudHOjdCXb4uDnX5wEDDm_9P-QJr-53Rr_QIQEaH2-zQBa5NnTldtJTPZ4LGoTUCXcwhSH7aU8cCQoFnDLWyKYx6EEUghlbgw7kUfK_7MAy3r6QNc9sNJL2OlcEg5DNHY)

- mongodb 쉘에 접속한 모습입니다.

![](https://lh7-us.googleusercontent.com/Q51G5dLOkmzewb-bq4bwEDKW74_0xKHqFBPRWbLDCS_rMejq1i6W6EYToMg-OY5yLuuNRxk25-ijL7QzWG6wYiUhqnmgoW64WBOafbXslh7i2nQ8CQT6aXkaNLiu89P7tfthDFKZFE1GebGRpgbn0go)

- mongodb를 통해 유저들의 데이터를 볼 수 있습니다.
  - 비밀번호의 경우 해쉬화하여 보관합니다.
  - 유저 구분에 도움이 되는 쿠키와 세션 정보를 저장

아래는 서버가 실행된 후 웹사이트를 실행하는 과정입니다.

![](https://lh7-us.googleusercontent.com/ws1rCEnEsMrXbVHoFyE1ERQt3W9OYxS-sYiKyf7oz5WBKyQO3KmGCuZ38WUX_yAXhDrCc16viLeXaLzS5liLa0BQRGOBvuHx8YmeUv0V6HkQLc8w2imxZ02d5DZwGkXuSUeKBQO651Hq8LVtUK3opMo)

- 터미널에서 왼쪽 부분은 node에서 react에 접근 가능하도록 react에서 build하여 html파일을 만드는 과정입니다

- 오른쪽 부분은 node로 react와 mongodb를 연결한 과정입니다.

![](https://lh7-us.googleusercontent.com/WOx7_pqJouG5dhk8HRs7DRDwUtARKmzWM-4D1lqLZhnQ6ZYn_ICKzyMqe0ONhfVtli45O50wVv9DHtOzn6hdE-OnD9Ve10F4jL89Ttx2TMAMVR5NyESd70-PbJiJHp9Y1ZBZ3KfuN0I5CYbWNNollBc)

- 그 후 [http://localhost:8080/](http://localhost:8080/) 를 입력하여 접속하면 위와같은 웹사이트가 실행됩니다.

사용 방법![](https://lh7-us.googleusercontent.com/WOx7_pqJouG5dhk8HRs7DRDwUtARKmzWM-4D1lqLZhnQ6ZYn_ICKzyMqe0ONhfVtli45O50wVv9DHtOzn6hdE-OnD9Ve10F4jL89Ttx2TMAMVR5NyESd70-PbJiJHp9Y1ZBZ3KfuN0I5CYbWNNollBc)
![](https://lh7-us.googleusercontent.com/s4bwa-6N3KtswBMkEUSymehukehNer4w8hRiJbiTSNDBAl37e7ulABh4xqhsX-jOeUGplM4y0h8Kv6YdyGgOP0_jMvuv42OtS00yv1o0_Tc8Wv_UezS7PdTXQq6_WX6WcPDtsoO0WvpzaRygELzgXkE)

- 메인화면 모습입니다. 전체화면으로 사용하시기를 권장드립니다.
- slick 라이브러리를 통해 홈 화면에서 2가지 화면을 보여주고 있습니다.

최초에 회원가입을 눌러 진행합니다.

![](https://lh7-us.googleusercontent.com/obse0EfcF6UKZwzhqEkiUZjPIuTh_OqPstQgdHNFyqNXG5EPVlWpweR0w_10VFvJvngMM0JJ0rGc05InxNm-iUqR9JLqx-3Z5MVVi24-cfsTDdHN-Nn28svBByoF7vjr0m9QdYJldqFF5Rio1AB76VM)
![](https://lh7-us.googleusercontent.com/TcJEg5gey4S1vVLbXrf4aiQfEhemGV9tuBVWuhNX88tNcqJG5_S88dQlT_Wshr-Hfz8LZNjtTpf3cQ2MU_JK51hQ0nlwSbYPB351aRTa_CYpYTC3424IK48nB48dLBpc3DMtUZeXisJRe3Stibu5eko)

- 회원가입 진행
- db정보를 통해 중복된 아이디를 적은 경우 경고표시를 뜨게 했습니다.

![](https://lh7-us.googleusercontent.com/4Uqn8iLdyUWLmX42wDEwQMQYbTG27Mqmfw1N68kacmo8m_hIrBmMO2onsSUkoebR0AQlrCXzM2m3ot9XGU0NQyWB3mDARE7-KbHeDkyDQT-u6sTr-ACzPXdPMmsBQUsFViUKdQ8503sRzcdL4-6AcQw)

- 가입한 계정으로 로그인

![](https://lh7-us.googleusercontent.com/V4p3OYuiHEZHU3nm200M5oT4aY41aWxqkEFUbmLG-a4aGZV0rmiZ_orBQ9_KOt610hbmdGXECEDzpqSWRLEn7CrjVpwS4fS6sGCQ4ZM__togmV-SPMTuo5EVetvJimin0vlcVKtQjfIdhSVU8NoPWoQ)

- 일정 관리 페이지입니다. 우측 상단에 [추가하기] 버튼을 눌러 일정을 추가합니다.

![](https://lh7-us.googleusercontent.com/UFw2jTbP3Bv2bYWAwZbWz7MIZFACCx7RnWScb0H-bDyapzA-merQIoEJjTZVqhbbtqGsi4SCBXhF35NgOm2NAtD6wSzchewu2998-FusRNjCNeVKtGN8wEMhsQhm-xOvBC2sW8yrTL6LMR1qbUnMZIA)![](https://lh7-us.googleusercontent.com/XJF1PJKrqFFfLnidFvte-6diP7K7k4jDrC4L6oMrwq7fQ4HUYs-nNFxOnuwbKsyTSm0X1pU8U2YRwNgASJ3oKYqujG2AkN5W51GHCwGCIzqEvQgLdIxU1SAd8R0Lf80bbhoIMJwjkP-dg8mFuVJC8wk)

- 왼쪽 사진은 처음 진입 사진입니다.

- 오른쪽 사진처럼 모임이 가능한 날짜를 선택 후 [확인]을 눌러 진행합니다.

- 모임을 가지고자 하는 날짜의 범위를 설정할 때, 해당 날짜를 드래그 해도 되지만, 처음 날짜와 마지막 날짜만 클릭해도 됩니다. 설정 가능한 기간에 제한은 없습니다.

![](https://lh7-us.googleusercontent.com/qU1MCahhPG6fBieYYjFZPUHjBhSSsU1GKBy_qIuNooMyc6bIn7NrDkqJiVxlz8YkSViRsQ07XAq_BKL4TZaqFcSCAj01guJEV07X_CZr0qTCYqasKvAY3fyX2jBlpy-MnHyYujWGvQgQjjBZdpCAcac)
![](https://lh7-us.googleusercontent.com/oommUjJcGQ-PssUrEXilkaHAFpui8pK3MnpFioruo_KqMaEXSt5loCOCWvWmeFeK1Jb9XCWuwWN-AqWlQNJhi3elDaIUBOAu7q6_Zx-84SVdxLTkaW-EuCkLPvELqXW29iOJRJOjBmlaAVAJOwKbbYs)

- 왼쪽사진이 초기 화면입니다.

- 이전에 선택한 날짜에서 가능한 시간대를 선택합니다. (오른쪽 사진 참고)

- 친구초대란에 모임을 원하는 친구들의 계정을 차례로 입력합니다.

- [일정 확정하기] 버튼을 누릅니다.

![](https://lh7-us.googleusercontent.com/r7GgMxlu4ATrSdygvmZU4bIF9qLV0JVzioROCuvzGsNOvALmOB9CirdECoGFu7CkGLD748N1ErX0Wqy35detxZ5dhZwOeotbwBph2YYOB9XYF8socVIf5z-WAj0ps3uRC8ug_gPmcPCgnlkSu3QMR08)

- 일정 관리 페이지에 일정이 추가된 모습입니다.

![](https://lh7-us.googleusercontent.com/ZYwQPiZZQaApuX1vsQIQWrDJD6bBVenx-2I1k_MIDUE6tG-saGEfOh_mh6Pzh67u6NzL6JnDDyumkek7q57POIq1-xJQg2fyXyaE5ccNHdf45Ipizc5mx5vcZJkBZEJkue072mPOk_xKu-vSQG8PH-0)

- 위와 같이 여러 개의 일정도 동시에 관리가 가능합니다.

## 프로젝트 저장소 주소

- [🗄️서버](https://github.com/SANGDNOG/schedulecoordination_server)
- [🖥️프론트](https://github.com/SANGDNOG/schedulecoordination_front)

## 라이선스

_Licensed under the MIT License_
