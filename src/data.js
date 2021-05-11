export const rowList = [
  {
    userName: 'Row #1',
    barList: [
      {
        myStart: '2020-03-03 18:00',
        myEnd: '2020-03-03 23:00',
        label: 'Immobile',
        ganttBarConfig: { color: 'white', backgroundColor: '#404040', opacity: 0.5, immobile: true }
      },
      {
        myStart: '2020-03-03 04:00',
        myEnd: '2020-03-03 15:00',
        label: 'Bar',
        ganttBarConfig: { color: 'white', backgroundColor: '#2e74a3', bundle: 'blueBundle' }
      }
    ]
  },
  {
    userName: 'Row #2',
    barList: [
      {
        myStart: '2020-03-02 09:00',
        myEnd: '2020-03-02 18:00',
        image: 'vue_ganttastic_logo_no_text.png',
        label: 'I have an image',
        ganttBarConfig: { color: 'white', backgroundColor: '#de3b26', bundle: 'redBundle' }
      },
      {
        myStart: '2020-03-03 04:00',
        myEnd: '2020-03-03 15:00',
        label: 'We belong together ^',
        ganttBarConfig: { color: 'white', backgroundColor: '#2e74a3', bundle: 'blueBundle' }
      },
      {
        myStart: '2020-03-03 18:00',
        myEnd: '2020-03-03 22:00',
        label: 'Bar',
        ganttBarConfig: { color: 'white', backgroundColor: '#aa34a3' }
      }
    ]
  },
  {
    userName: 'Row #3',
    barList: [
      {
        myStart: '2020-03-02 09:00',
        myEnd: '2020-03-02 18:00',
        label: 'I am with stupid ^',
        ganttBarConfig: { color: 'white', backgroundColor: '#de3b26', bundle: 'redBundle' }
      },
      {
        myStart: '2020-03-02 22:30',
        myEnd: '2020-03-03 05:00',
        label: 'With handles!',
        ganttBarConfig: { color: 'white', backgroundColor: '#a23def', handles: true }
      },
      {
        myStart: '2020-03-02 01:00',
        myEnd: '2020-03-02 07:00',
        label: 'Bar',
        ganttBarConfig: { color: 'white', backgroundColor: '#5effad', pushOnOverlap: false, zIndex: 3 }
      },
      {
        myStart: '2020-03-03 14:00',
        myEnd: '2020-03-03 20:00',
        label: 'Woooow!',
        ganttBarConfig: { color: 'white', background: 'repeating-linear-gradient(45deg,#de7359,#de7359 10px,#ffc803 10px,#ffc803 20px)' }
      }
    ]
  },
  {
    userName: 'Row #4',
    barList: [
      {
        myStart: '2020-03-03 06:30',
        myEnd: '2020-03-03 20:00',
        label: 'Bar',
        ganttBarConfig: { color: 'white', backgroundColor: '#d18aaf', handles: true }
      },
      {
        myStart: '2020-03-02 00:30',
        myEnd: '2020-03-03 01:00',
        label: 'Rectangular',
        ganttBarConfig: { color: 'white', backgroundColor: '#f2840f', borderRadius: 0 }
      }
    ]
  }
]

export const chartDate = [
  {
    id: 1,
    title: 'Monday, 02. March',
    bgColor: '#dfe4ea'
  },
  {
    id: 2,
    title: 'Tuesday, 03. March',
    bgColor: '#ced6e0'
  }
]
