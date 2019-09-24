import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { thisExpression } from "@babel/types";

let database = [
  {
    group: "MOC-191",
    content: [
      {
        name: "Понедельник",
        group: "MOC-191",
        lessons: [
          {
            time: "08:30",
            name: "Алгебра и теория чисел (пр) Доц. Кондрашов А.Н., 3-04 А"
          },
          {
            time: "10:10",
            name: "Геометрия и топология (пр) доц. Полубоярова Н.М., 3-05 А"
          },
          {
            time: "12:00",
            name:
              "Информатика и программирование (лаб) ст.пр. Штельмах Т.В., 1-02 В ст.пр. Чебаненко Н.А., 4-02 А"
          },
          {
            time: "13:40",
            name:
              "Информатика и программирование (лаб) ст.пр. Штельмах Т.В., 1-02 В ст.пр. Чебаненко Н.А., 4-02 А"
          },
          {
            time: "15:20",
            name: "Физическая культура и спорт(л), проф. Коваленко Т.Г., 4-29 Г"
          }
        ]
      },
      {
        name: "Вторник",
        lessons: [
          {
            time: "08:30",
            name: "-"
          },
          {
            time: "10:10",
            name: "Геометрия и топология (л) доц. Полубоярова Н.М., 3-01 А"
          },
          {
            time: "12:00",
            name: "Математический анализ (пр) ст.пр. Королев А.Г., 1-01 Б"
          },
          {
            time: "13:40",
            name:
              "Прикладная физическая культура (пр), ст. пр. Швардыгулин А.В., ст.пр. Заулошнов В.А., ст.пр. Никитин С.О., пр. Иноземцева А.Н"
          },
          {
            time: "15:20",
            name: "-"
          }
        ]
      },
      {
        name: "Среда",
        lessons: [
          {
            time: "08:30",
            name:
              "Русский язык и культура речи (пр), проф. Терентьева Е.В., 3-04А"
          },
          {
            time: "10:10",
            name: "Алгебра и теория чисел (пр) доц. Кондрашов А.Н., 1-01 Б"
          },
          {
            time: "12:00",
            name: "-"
          },
          {
            time: "13:40",
            name: "-"
          },
          {
            time: "15:20",
            name: "-"
          }
        ]
      },
      {
        name: "Четверг",
        lessons: [
          {
            time: "08:30",
            name: "-"
          },
          {
            time: "10:10",
            name: "-"
          },
          {
            time: "12:00",
            name:
              "Иностранный язык (лаб) доц. Щеколдина А.В., 3-05 А ст.пр. Торгашов В.И., 4-03 А"
          },
          {
            time: "13:40",
            name:
              "Иностранный язык (лаб) доц. Щеколдина А.В. 4-02 А ст.пр. Буланов Д.С. 4-03 А"
          },
          {
            time: "15:20",
            name: "Математический анализ (пр) ст.пр. Королев А.Г., 1-01 Б"
          }
        ]
      },
      {
        name: "Пятница",
        lessons: [
          {
            time: "08:30",
            name: "-"
          },
          {
            time: "10:10",
            name: "-"
          },
          {
            time: "12:00",
            name: "-"
          },
          {
            time: "13:40",
            name: "-"
          },
          {
            time: "15:20",
            name: "-"
          }
        ]
      },
      {
        name: "Суббота",
        lessons: [
          {
            time: "08:30",
            name: "Алгебра и теория чисел (л) доц. Попов В.В., 4-08 А"
          },
          {
            time: "10:10",
            name:
              "Информатика и программирование (л) ст.пр. Штельмах Т.В., 4-08 А"
          },
          {
            time: "12:00",
            name: "Математический анализ (л) доц. Светлов А.В., 4-08 А"
          },
          {
            time: "13:40",
            name: "-"
          },
          {
            time: "15:20",
            name: "-"
          }
        ]
      }
    ]
  },
  {
    group: "MOC-192",
    content: [
      {
        name: "Понедельник",
        group: "MOC-192",
        lessons: [
          {
            time: "08:30",
            name: "Геометрия и топология (пр) доц. Полубоярова Н.М., 3-05 А"
          },
          {
            time: "10:10",
            name: "Алгебра и теория чисел (пр) Доц. Кондрашов А.Н., 1-01 Б"
          },
          {
            time: "12:00",
            name: "Математический анализ (пр) ст.пр. Королев А.Г., 1-01 Б"
          },
          {
            time: "13:40",
            name: "-"
          },
          {
            time: "15:20",
            name: "-"
          }
        ]
      },
      {
        name: "Вторник",
        lessons: [
          {
            time: "08:30",
            name: "-"
          },
          {
            time: "10:10",
            name: "Геометрия и топология (л) доц. Полубоярова Н.М., 3-01 А"
          },
          {
            time: "12:00",
            name:
              "Русский язык и культура речи (пр), проф. Терентьева Е.В. 3-04А"
          },
          {
            time: "13:40",
            name:
              "Прикладная физическая культура (пр), ст. пр. Швардыгулин А.В., ст.пр. Заулошнов В.А., ст.пр. Никитин С.О., пр. Иноземцева А.Н"
          },
          {
            time: "15:20",
            name: "-"
          }
        ]
      },
      {
        name: "Среда",
        lessons: [
          {
            time: "08:30",
            name: "Алгебра и теория чисел (пр) доц. Кондрашов А.Н., 1-01 Б"
          },
          {
            time: "10:10",
            name:
              "Информатика и программирование (лаб) ст.пр. Чебаненко Н.А., 4-02 А асс. Кузьменко А.Ю., 1-01 А"
          },
          {
            time: "12:00",
            name:
              "Информатика и программирование (лаб) ст.пр. Чебаненко Н.А., 1-02 В асс. Кузьменко А.Ю., 1-01 А"
          },
          {
            time: "13:40",
            name: "-"
          },
          {
            time: "15:20",
            name: "-"
          }
        ]
      },
      {
        name: "Четверг",
        lessons: [
          {
            time: "08:30",
            name:
              "Иностранный язык (лаб) доц. Малушко Е.Ю., 3-03 А ст.пр. Буланов Д.С., 33-08 А"
          },
          {
            time: "10:10",
            name:
              "Иностранный язык (лаб) доц. Малушко Е.Ю., 3-03 А ст.пр. Буланов Д.С., 33-08 А"
          },
          {
            time: "12:00",
            name: "Математический анализ (пр) ст.пр. Королев А.Г., 1-01 Б"
          },
          {
            time: "13:40",
            name: "-"
          },
          {
            time: "15:20",
            name: "-"
          }
        ]
      },
      {
        name: "Пятница",
        lessons: [
          {
            time: "08:30",
            name: "-"
          },
          {
            time: "10:10",
            name: "-"
          },
          {
            time: "12:00",
            name: "-"
          },
          {
            time: "13:40",
            name: "-"
          },
          {
            time: "15:20",
            name: "-"
          }
        ]
      },
      {
        name: "Суббота",
        lessons: [
          {
            time: "08:30",
            name: "Алгебра и теория чисел (л) доц. Попов В.В., 4-08 А"
          },
          {
            time: "10:10",
            name:
              "Информатика и программирование (л) ст.пр. Штельмах Т.В., 4-08 А"
          },
          {
            time: "12:00",
            name: "Математический анализ (л) доц. Светлов А.В., 4-08 А"
          },
          {
            time: "13:40",
            name: "-"
          },
          {
            time: "15:20",
            name: "-"
          }
        ]
      }
    ]
  }
];

export default class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      change: true,
      animate: false,
      database: database
    };
  }

  componentDidMount() {
    this.startPointer();
    // console.log(process.env.NODE_ENV);
  }

  componentWillMount() {
    this.setSchedule();
  }

  setSchedule = () => {
    let {
      match: {
        params: { id }
      }
    } = this.props;
    // console.log("I GOT ID", id);
    switch (id) {
      case "1":
        this.setState({
          database: database[0]
        });
        break;
      case "2":
        this.setState({
          database: database[1]
        });
        break;
      default:
        this.setState({
          database: database[0]
        });
        break;
    }
  };

  init = () => {
    this.startPointer();
    // debugger;
  };

  getToday = () => {
    let getWeekDay = date => {
      let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
      return days[date.getDay()];
    };

    let date = new Date();
    let today = getWeekDay(date);

    switch (today) {
      case "ПН":
        return 0;
      case "ВТ":
        return 1;
      case "СР":
        return 2;
      case "ЧТ":
        return 3;
      case "ПТ":
        return 4;
      case "СБ":
        return 5;
      case "ВС":
        return 0;
      default:
        return 0;
    }
  };

  startPointer = () => {
    let pointer = document.querySelector(".table__pointer");
    let initialHeight = 0;
    let now = new Date();
    let { change } = this.state;
    let exist = change;

    if (exist && this.getToday() > 0) {
      pointer.style.top = `${515 * this.getToday() - 12}px`;
      initialHeight = 515 * this.getToday();
    } else if (!exist) {
      pointer.style.top = `${0}px`;
      initialHeight = 0;
    }
    let Hn = now.getHours();
    let Mn = now.getMinutes();

    function calcMin(M, H) {
      return M + H * 60;
    }
    // set position of pointer
    if (calcMin(Mn, Hn) > M(8, 30) && calcMin(Mn, Hn) < M(10, 0)) {
      pointer.style.top = `${initialHeight +
        10 +
        curM(now, 30, 8) * 0.87378}px`;
    } else if (calcMin(Mn, Hn) > M(10, 10) && calcMin(Mn, Hn) < M(11, 40)) {
      pointer.style.top = `${initialHeight +
        10 +
        103 +
        curM(now, 10, 10) * 0.87378}px`;
    } else if (calcMin(Mn, Hn) > M(12, 0) && calcMin(Mn, Hn) < M(13, 30)) {
      pointer.style.top = `${initialHeight +
        10 +
        103 * 2 +
        curM(now, 0, 12) * 0.87378}px`;
    } else if (calcMin(Mn, Hn) > M(13, 40) && calcMin(Mn, Hn) < M(15, 10)) {
      pointer.style.top = `${initialHeight +
        10 +
        103 * 3 +
        curM(now, 40, 13) * 0.87378}px`;
    } else if (calcMin(Mn, Hn) > M(15, 20) && calcMin(Mn, Hn) < M(17, 0)) {
      pointer.style.top = `${initialHeight +
        10 +
        103 * 4 +
        curM(now, 20, 15) * 0.87378}px`;
    } else if (calcMin(Mn, Hn) >= M(17, 0)) {
      pointer.style.top = `${513 * this.getToday() - 12}px`;
    } else {
      // set position of pointer during break
      let now = M(Hn, Mn);
      if (now >= M(10, 0) && now <= M(10, 10)) {
        pointer.style.top = `${initialHeight + 103 - 13}px`;
      } else if (now >= M(11, 40) && now <= M(12, 0)) {
        pointer.style.top = `${initialHeight + 103 * 2 - 13}px`;
      } else if (now >= M(13, 30) && now <= M(13, 40)) {
        pointer.style.top = `${initialHeight + 103 * 3 - 13}px`;
      } else if (now >= M(15, 10) && now <= M(15, 20)) {
        pointer.style.top = `${initialHeight + 103 * 4 - 13}px`;
      }
    }
    // culc diff minutes
    function curM(now, min, hour) {
      let curH = now.getHours();
      let curM = now.getMinutes();
      let curTime = curH * 60 + curM;
      let time = hour * 60 + min;
      return curTime - time;
    }
    // count minutes
    function M(H, M) {
      return H * 60 + M;
    }
  };

  animate = () => {
    // console.log("Animate 2");
    if (!this.state.animate) {
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector("body").style.height = "100vh";
    } else {
      document.querySelector("body").style.overflow = "visible";
      document.querySelector("body").style.height = "100%";
    }

    this.setState({
      animate: !this.state.animate
    });
    // console.log("CHANGE");
  };

  render() {
    let { change, animate, database } = this.state;
    return (
      <div className="schedule">
        <Link to="/">
          <div className="returning-header">
            <div className="returning-header__arrow">
              <svg
                width={10}
                height={18}
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L1 9L9 17"
                  stroke="#333333"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="returning-header__title">{database.group}</div>
          </div>
        </Link>

        <div className="schedule__menu">
          <div className="schedule__menu-switch">
            <div className="container" onClick={this.animate}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            className={`schedule__menu-list ${
              animate ? "schedule__menu-list_open" : "schedule__menu-list_close"
            }`}
          >
            <span>
              В избранное{" "}
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4791 10.9789C23.9516 10.5149 24.1183 9.83392 23.9146 9.20089C23.7103 8.56787 23.1783 8.11598 22.5247 8.02008L16.7135 7.16911C16.466 7.13278 16.2522 6.97634 16.1416 6.75016L13.5436 1.4433C13.2519 0.847079 12.6598 0.476562 12 0.476562C11.3406 0.476562 10.7486 0.847079 10.4569 1.4433L7.85835 6.75016C7.74782 6.97634 7.53348 7.13278 7.28598 7.16911L1.4748 8.02057C0.821693 8.11598 0.28969 8.56787 0.0854436 9.20089C-0.118323 9.83392 0.0484389 10.5149 0.52085 10.9789L4.72545 15.1093C4.90471 15.2856 4.98689 15.5394 4.94459 15.7874L3.9522 21.6202C3.8407 22.2755 4.10262 22.925 4.63654 23.3164C5.16999 23.7082 5.86443 23.759 6.44929 23.4486L11.6463 20.6947C11.8678 20.5774 12.1322 20.5774 12.3537 20.6947L17.5512 23.4486C17.8049 23.5832 18.0798 23.6496 18.3533 23.6496C18.7084 23.6496 19.0621 23.5377 19.3639 23.3164C19.8979 22.925 20.1598 22.2755 20.0483 21.6202L19.0554 15.7879C19.0131 15.5394 19.0953 15.2861 19.2745 15.1098L23.4791 10.9789ZM18.1087 15.9516L19.1011 21.7839C19.151 22.0774 19.0381 22.3579 18.7988 22.5332C18.559 22.708 18.2605 22.7293 17.9986 22.5918L12.8011 19.8374C12.5507 19.7052 12.2749 19.6383 12 19.6383C11.7251 19.6383 11.4497 19.7052 11.1989 19.8379L6.00235 22.5918C5.73947 22.7293 5.44103 22.708 5.20171 22.5332C4.96238 22.3579 4.84992 22.0779 4.89942 21.7839L5.89182 15.9516C5.98745 15.3888 5.80243 14.8143 5.39682 14.4162L1.19174 10.2853C0.979804 10.0771 0.907717 9.78355 0.999508 9.50021C1.09082 9.21639 1.32006 9.02169 1.61273 8.97858L7.42343 8.12761C7.98427 8.04575 8.46917 7.69122 8.71955 7.17879L11.3181 1.87193C11.4488 1.60458 11.704 1.44523 11.9995 1.44523C12.2956 1.44523 12.5503 1.60458 12.6815 1.87193L15.28 7.17879C15.5303 7.69122 16.0148 8.04575 16.5756 8.12761L22.3868 8.97858C22.6795 9.02169 22.9087 9.21639 23 9.50021C23.0913 9.78355 23.0197 10.0771 22.8078 10.2853L18.6032 14.4157C18.1976 14.8143 18.0125 15.3883 18.1087 15.9516Z"
                  fill="#DEA243"
                />
              </svg>
            </span>
            <span>
              Следить за дз{" "}
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M23.6108 10.87C22.2639 9.14303 20.5192 7.71452 18.5654 6.73905C16.5709 5.74329 14.4253 5.22663 12.1855 5.19954C12.1238 5.19785 11.8761 5.19785 11.8144 5.19954C9.57464 5.22668 7.42899 5.74329 5.43455 6.73905C3.48076 7.71452 1.73612 9.14298 0.389118 10.87C-0.129788 11.5353 -0.129788 12.4646 0.389118 13.1299C1.73607 14.8569 3.48076 16.2855 5.43455 17.2609C7.42899 18.2567 9.5746 18.7733 11.8144 18.8004C11.8761 18.8021 12.1238 18.8021 12.1855 18.8004C14.4253 18.7733 16.5709 18.2567 18.5654 17.2609C20.5192 16.2855 22.2638 14.857 23.6108 13.1299C24.1297 12.4645 24.1297 11.5353 23.6108 10.87ZM5.87072 16.3874C4.04635 15.4765 2.41707 14.1425 1.15899 12.5295C0.915853 12.2177 0.915853 11.7823 1.15899 11.4705C2.41702 9.8575 4.0463 8.52344 5.87072 7.61256C6.38888 7.35391 6.918 7.13022 7.45693 6.94085C6.07046 8.18716 5.19694 9.99334 5.19694 12C5.19694 14.0067 6.07051 15.813 7.45711 17.0593C6.91819 16.8699 6.38893 16.6461 5.87072 16.3874ZM12 17.8267C8.7871 17.8267 6.17325 15.2128 6.17325 11.9999C6.17325 8.78702 8.7871 6.17322 12 6.17322C15.2129 6.17322 17.8267 8.78706 17.8267 12C17.8267 15.2129 15.2129 17.8267 12 17.8267ZM22.841 12.5294C21.583 14.1424 19.9537 15.4765 18.1293 16.3874C17.6117 16.6457 17.0829 16.8684 16.5447 17.0576C17.9302 15.8114 18.8031 14.0057 18.8031 11.9999C18.8031 9.99301 17.9293 8.18659 16.5426 6.94028C17.0817 7.12971 17.611 7.35367 18.1293 7.61247C19.9537 8.52334 21.583 9.8574 22.8411 11.4704C23.0842 11.7822 23.0842 12.2177 22.841 12.5294Z"
                    fill="black"
                  />
                  <path
                    d="M12 9.50641C10.625 9.50641 9.50647 10.625 9.50647 11.9999C9.50647 13.3749 10.625 14.4934 12 14.4934C13.3749 14.4934 14.4935 13.3749 14.4935 11.9999C14.4935 10.625 13.375 9.50641 12 9.50641ZM12 13.5172C11.1634 13.5172 10.4827 12.8366 10.4827 11.9999C10.4827 11.1633 11.1633 10.4827 12 10.4827C12.8366 10.4827 13.5172 11.1633 13.5172 11.9999C13.5172 12.8366 12.8366 13.5172 12 13.5172Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width={24} height={24} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>

        <div className="schedule__controls">
          <div
            className={`schedule__controls-button ${
              change
                ? "schedule__controls-button_disable"
                : "schedule__controls-button_active"
            }`}
            onClick={async () => {
              await this.setState({ change: false });
              this.init();
            }}
          >
            Сегодня
          </div>
          <div
            className={`schedule__controls-button ${
              !change
                ? "schedule__controls-button_disable"
                : "schedule__controls-button_active"
            }`}
            onClick={async () => {
              await this.setState({ change: true });
              this.init();
            }}
          >
            Неделя
          </div>
        </div>

        <div className="schedule__table">
          <div className="table__pointer"></div>
          {!change ? (
            <Day
              name={database.content[this.getToday()].name}
              lessons={database.content[this.getToday()].lessons}
            />
          ) : (
            database.content.map((item, i) => (
              <Day name={item.name} lessons={item.lessons} key={i} />
            ))
          )}
        </div>
      </div>
    );
  }
}

class Lesson extends Component {
  render() {
    let { content, time } = this.props;
    return (
      <div className="table-day__lesson">
        <div className="lesson__time">{time}</div>
        <div className="lesson__content">{content}</div>
      </div>
    );
  }
}

class Day extends Component {
  render() {
    let { name, lessons } = this.props;
    return (
      <div className="schedule__table-day">
        <div className="table-day__lessons">
          {lessons.map((item, i) => (
            <Lesson time={item.time} content={item.name} key={i} />
          ))}
        </div>
        <div className="table-day__name">
          <span>{name}</span>
        </div>
      </div>
    );
  }
}
