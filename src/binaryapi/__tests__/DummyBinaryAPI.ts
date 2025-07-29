import sinon from 'sinon';

const friday_trading_times = {
    echo_req: {
        trading_times: '2018-08-24',
    },
    msg_type: 'trading_times',
    trading_times: {
        markets: [
            {
                name: 'Forex',
                submarkets: [
                    {
                        name: 'Major Pairs',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/JPY',
                                underlying_symbol: 'frxAUDJPY',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/USD',
                                underlying_symbol: 'frxAUDUSD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/AUD',
                                underlying_symbol: 'frxEURAUD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/CAD',
                                underlying_symbol: 'frxEURCAD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/CHF',
                                underlying_symbol: 'frxEURCHF',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/GBP',
                                underlying_symbol: 'frxEURGBP',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/JPY',
                                underlying_symbol: 'frxEURJPY',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/USD',
                                underlying_symbol: 'frxEURUSD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/AUD',
                                underlying_symbol: 'frxGBPAUD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/JPY',
                                underlying_symbol: 'frxGBPJPY',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/USD',
                                underlying_symbol: 'frxGBPUSD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/CAD',
                                underlying_symbol: 'frxUSDCAD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/CHF',
                                underlying_symbol: 'frxUSDCHF',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/JPY',
                                underlying_symbol: 'frxUSDJPY',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Minor Pairs',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/CAD',
                                underlying_symbol: 'frxAUDCAD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/CHF',
                                underlying_symbol: 'frxAUDCHF',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/NZD',
                                underlying_symbol: 'frxAUDNZD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/NZD',
                                underlying_symbol: 'frxEURNZD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/CAD',
                                underlying_symbol: 'frxGBPCAD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/CHF',
                                underlying_symbol: 'frxGBPCHF',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/NOK',
                                underlying_symbol: 'frxGBPNOK',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/NZD',
                                underlying_symbol: 'frxGBPNZD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/PLN',
                                underlying_symbol: 'frxGBPPLN',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'NZD/JPY',
                                underlying_symbol: 'frxNZDJPY',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'NZD/USD',
                                underlying_symbol: 'frxNZDUSD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/MXN',
                                underlying_symbol: 'frxUSDMXN',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/NOK',
                                underlying_symbol: 'frxUSDNOK',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/PLN',
                                underlying_symbol: 'frxUSDPLN',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/SEK',
                                underlying_symbol: 'frxUSDSEK',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Basket Indices',
                submarkets: [
                    {
                        name: 'Forex Basket',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD Basket',
                                underlying_symbol: 'WLDAUD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR Basket',
                                underlying_symbol: 'WLDEUR',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP Basket',
                                underlying_symbol: 'WLDGBP',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD Basket',
                                underlying_symbol: 'WLDUSD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Commodities Basket',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'Gold Basket',
                                underlying_symbol: 'WLDXAU',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Indices',
                submarkets: [
                    {
                        name: 'Asia/Oceania',
                        symbols: [
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'chartonly',
                                name: 'Australian Index',
                                underlying_symbol: 'AS51',
                                times: {
                                    close: ['06:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '09:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 10,
                                events: [
                                    {
                                        dates: '2018-09-12, 2018-09-13',
                                        descrip: 'Ganesh Chaturthi',
                                    },
                                    {
                                        dates: '2018-09-20',
                                        descrip: 'Moharrum',
                                    },
                                ],
                                feed_license: 'delayed',
                                name: 'Bombay Index',
                                underlying_symbol: 'BSESENSEX30',
                                times: {
                                    close: ['10:00:00'],
                                    open: ['03:45:00'],
                                    settlement: '13:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 60,
                                events: [],
                                feed_license: 'delayed',
                                name: 'Hong Kong Index',
                                underlying_symbol: 'HSI',
                                times: {
                                    close: ['03:59:00', '07:40:00'],
                                    open: ['01:30:00', '05:00:00'],
                                    settlement: '10:40:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 1440,
                                events: [
                                    {
                                        dates: '2018-09-17',
                                        descrip: 'Respect-for-the-aged Day',
                                    },
                                    {
                                        dates: '2018-09-24',
                                        descrip: 'Autumnal Equinox Day (obs)',
                                    },
                                ],
                                feed_license: 'daily',
                                name: 'Japanese Index',
                                underlying_symbol: 'N225',
                                times: {
                                    close: ['02:30:00', '06:00:00'],
                                    open: ['00:00:00', '03:30:00'],
                                    settlement: '09:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 1440,
                                events: [],
                                feed_license: 'daily',
                                name: 'Singapore Index',
                                underlying_symbol: 'STI',
                                times: {
                                    close: ['09:00:00'],
                                    open: ['01:00:00'],
                                    settlement: '12:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Europe/Africa',
                        symbols: [
                            {
                                events: [],
                                name: 'Belgian Index',
                                underlying_symbol: 'BFX',
                                times: {
                                    close: ['15:30:00'],
                                    open: ['07:00:00'],
                                    settlement: '18:30:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Dutch Index',
                                underlying_symbol: 'AEX',
                                times: {
                                    close: ['15:30:00'],
                                    open: ['07:00:00'],
                                    settlement: '18:30:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'French Index',
                                underlying_symbol: 'FCHI',
                                times: {
                                    close: ['15:30:00'],
                                    open: ['07:00:00'],
                                    settlement: '18:30:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'delayed',
                                name: 'German Index',
                                underlying_symbol: 'GDAXI',
                                times: {
                                    close: ['15:30:00'],
                                    open: ['07:00:00'],
                                    settlement: '18:30:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'delayed',
                                name: 'Irish Index',
                                underlying_symbol: 'ISEQ',
                                times: {
                                    close: ['15:30:00'],
                                    open: ['07:00:00'],
                                    settlement: '21:30:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'delayed',
                                name: 'Norwegian Index',
                                underlying_symbol: 'OBX',
                                times: {
                                    close: ['14:30:00'],
                                    open: ['07:00:00'],
                                    settlement: '17:30:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 30,
                                events: [
                                    {
                                        dates: '2018-09-24',
                                        descrip: 'Heritage Day',
                                    },
                                ],
                                feed_license: 'delayed',
                                name: 'South African Index',
                                underlying_symbol: 'TOP40',
                                times: {
                                    close: ['14:50:00'],
                                    open: ['07:00:00'],
                                    settlement: '17:50:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 1440,
                                events: [],
                                feed_license: 'daily',
                                name: 'Swiss Index',
                                underlying_symbol: 'SSMI',
                                times: {
                                    close: ['15:20:00'],
                                    open: ['07:00:00'],
                                    settlement: '18:20:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Americas',
                        symbols: [
                            {
                                delay_amount: 1440,
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                feed_license: 'chartonly',
                                name: 'US Index',
                                underlying_symbol: 'SPC',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['13:30:00'],
                                    settlement: '22:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Middle East',
                        symbols: [
                            {
                                delay_amount: 1440,
                                events: [
                                    {
                                        dates: '2018-09-11',
                                        descrip: 'Islamic New Year',
                                    },
                                ],
                                feed_license: 'chartonly',
                                name: 'Dubai Index',
                                underlying_symbol: 'DFMGI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
                            },
                        ],
                    },
                    {
                        name: 'OTC Indices',
                        symbols: [
                            {
                                events: [],
                                name: 'Australian OTC Index',
                                underlying_symbol: 'OTC_AS51',
                                times: {
                                    close: ['06:30:00', '20:00:00'],
                                    open: ['00:00:00', '07:30:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Dutch OTC Index',
                                underlying_symbol: 'OTC_AEX',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Euro 50 OTC Index',
                                underlying_symbol: 'OTC_SX5E',
                                times: {
                                    close: ['19:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '21:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'French OTC Index',
                                underlying_symbol: 'OTC_FCHI',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'German OTC Index',
                                underlying_symbol: 'OTC_GDAXI',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Hong Kong OTC Index',
                                underlying_symbol: 'OTC_HSI',
                                times: {
                                    close: ['04:00:00', '08:00:00'],
                                    open: ['01:30:00', '05:00:00'],
                                    settlement: '10:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-17',
                                        descrip: 'Respect-for-the-aged Day',
                                    },
                                    {
                                        dates: '2018-09-24',
                                        descrip: 'Autumnal Equinox Day (obs)',
                                    },
                                ],
                                name: 'Japanese OTC Index',
                                underlying_symbol: 'OTC_N225',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Swiss OTC Index',
                                underlying_symbol: 'OTC_SSMI',
                                times: {
                                    close: ['16:00:00'],
                                    open: ['07:00:00'],
                                    settlement: '18:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-08-27',
                                        descrip: 'Summer Bank Holiday',
                                    },
                                ],
                                name: 'UK OTC Index',
                                underlying_symbol: 'OTC_FTSE',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                name: 'US OTC Index',
                                underlying_symbol: 'OTC_SPC',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                name: 'US Tech 100 OTC Index',
                                underlying_symbol: 'OTC_NDX',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                name: 'Wall Street OTC Index',
                                underlying_symbol: 'OTC_DJI',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Commodities',
                submarkets: [
                    {
                        name: 'Metals',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Gold/USD',
                                underlying_symbol: 'frxXAUUSD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Palladium/USD',
                                underlying_symbol: 'frxXPDUSD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Platinum/USD',
                                underlying_symbol: 'frxXPTUSD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Silver/USD',
                                underlying_symbol: 'frxXAGUSD',
                                times: {
                                    close: ['21:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Energy',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: '2018-08-27',
                                        descrip: 'Summer Bank Holiday',
                                    },
                                ],
                                name: 'Oil/USD',
                                underlying_symbol: 'frxBROUSD',
                                times: {
                                    close: ['18:30:00'],
                                    open: ['07:15:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Volatility Indices',
                submarkets: [
                    {
                        name: 'Continuous Indices',
                        symbols: [
                            {
                                events: [],
                                name: 'Volatility 10 Index',
                                underlying_symbol: 'R_10',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 25 Index',
                                underlying_symbol: 'R_25',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 50 Index',
                                underlying_symbol: 'R_50',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 75 Index',
                                underlying_symbol: 'R_75',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 100 Index',
                                underlying_symbol: 'R_100',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                        ],
                    },
                    {
                        name: 'Daily Reset Indices',
                        symbols: [
                            {
                                events: [],
                                name: 'Bear Market Index',
                                underlying_symbol: 'RDBEAR',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Bull Market Index',
                                underlying_symbol: 'RDBULL',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

const saturday_trading_times = {
    echo_req: {
        trading_times: '2018-08-25',
    },
    msg_type: 'trading_times',
    trading_times: {
        markets: [
            {
                name: 'Forex',
                submarkets: [
                    {
                        name: 'Major Pairs',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/JPY',
                                underlying_symbol: 'frxAUDJPY',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/USD',
                                underlying_symbol: 'frxAUDUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/AUD',
                                underlying_symbol: 'frxEURAUD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/CAD',
                                underlying_symbol: 'frxEURCAD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/CHF',
                                underlying_symbol: 'frxEURCHF',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/GBP',
                                underlying_symbol: 'frxEURGBP',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/JPY',
                                underlying_symbol: 'frxEURJPY',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/USD',
                                underlying_symbol: 'frxEURUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/AUD',
                                underlying_symbol: 'frxGBPAUD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/JPY',
                                underlying_symbol: 'frxGBPJPY',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/USD',
                                underlying_symbol: 'frxGBPUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/CAD',
                                underlying_symbol: 'frxUSDCAD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/CHF',
                                underlying_symbol: 'frxUSDCHF',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/JPY',
                                underlying_symbol: 'frxUSDJPY',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Minor Pairs',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/CAD',
                                underlying_symbol: 'frxAUDCAD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/CHF',
                                underlying_symbol: 'frxAUDCHF',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/NZD',
                                underlying_symbol: 'frxAUDNZD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/NZD',
                                underlying_symbol: 'frxEURNZD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/CAD',
                                underlying_symbol: 'frxGBPCAD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/CHF',
                                underlying_symbol: 'frxGBPCHF',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/NOK',
                                underlying_symbol: 'frxGBPNOK',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/NZD',
                                underlying_symbol: 'frxGBPNZD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/PLN',
                                underlying_symbol: 'frxGBPPLN',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'NZD/JPY',
                                underlying_symbol: 'frxNZDJPY',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'NZD/USD',
                                underlying_symbol: 'frxNZDUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/MXN',
                                underlying_symbol: 'frxUSDMXN',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/NOK',
                                underlying_symbol: 'frxUSDNOK',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/PLN',
                                underlying_symbol: 'frxUSDPLN',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/SEK',
                                underlying_symbol: 'frxUSDSEK',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Basket Indices',
                submarkets: [
                    {
                        name: 'Forex Basket',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD Basket',
                                underlying_symbol: 'WLDAUD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR Basket',
                                underlying_symbol: 'WLDEUR',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP Basket',
                                underlying_symbol: 'WLDGBP',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD Basket',
                                underlying_symbol: 'WLDUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Commodities Basket',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'Gold Basket',
                                underlying_symbol: 'WLDXAU',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Indices',
                submarkets: [
                    {
                        name: 'Asia/Oceania',
                        symbols: [
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'chartonly',
                                name: 'Australian Index',
                                underlying_symbol: 'AS51',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 10,
                                events: [
                                    {
                                        dates: '2018-09-12, 2018-09-13',
                                        descrip: 'Ganesh Chaturthi',
                                    },
                                    {
                                        dates: '2018-09-20',
                                        descrip: 'Moharrum',
                                    },
                                ],
                                feed_license: 'delayed',
                                name: 'Bombay Index',
                                underlying_symbol: 'BSESENSEX30',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 60,
                                events: [
                                    {
                                        dates: '2018-09-25',
                                        descrip: 'Day After Mid-autumn Fest',
                                    },
                                ],
                                feed_license: 'delayed',
                                name: 'Hong Kong Index',
                                underlying_symbol: 'HSI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 1440,
                                events: [
                                    {
                                        dates: '2018-09-17',
                                        descrip: 'Respect-for-the-aged Day',
                                    },
                                    {
                                        dates: '2018-09-24',
                                        descrip: 'Autumnal Equinox Day (obs)',
                                    },
                                ],
                                feed_license: 'daily',
                                name: 'Japanese Index',
                                underlying_symbol: 'N225',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 1440,
                                events: [],
                                feed_license: 'daily',
                                name: 'Singapore Index',
                                underlying_symbol: 'STI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Europe/Africa',
                        symbols: [
                            {
                                events: [],
                                name: 'Belgian Index',
                                underlying_symbol: 'BFX',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Dutch Index',
                                underlying_symbol: 'AEX',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'French Index',
                                underlying_symbol: 'FCHI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'delayed',
                                name: 'German Index',
                                underlying_symbol: 'GDAXI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'delayed',
                                name: 'Irish Index',
                                underlying_symbol: 'ISEQ',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'delayed',
                                name: 'Norwegian Index',
                                underlying_symbol: 'OBX',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 30,
                                events: [
                                    {
                                        dates: '2018-09-24',
                                        descrip: 'Heritage Day',
                                    },
                                ],
                                feed_license: 'delayed',
                                name: 'South African Index',
                                underlying_symbol: 'TOP40',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 1440,
                                events: [],
                                feed_license: 'daily',
                                name: 'Swiss Index',
                                underlying_symbol: 'SSMI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Americas',
                        symbols: [
                            {
                                delay_amount: 1440,
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                feed_license: 'chartonly',
                                name: 'US Index',
                                underlying_symbol: 'SPC',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Middle East',
                        symbols: [
                            {
                                delay_amount: 1440,
                                events: [
                                    {
                                        dates: '2018-09-11',
                                        descrip: 'Islamic New Year',
                                    },
                                ],
                                feed_license: 'chartonly',
                                name: 'Dubai Index',
                                underlying_symbol: 'DFMGI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
                            },
                        ],
                    },
                    {
                        name: 'OTC Indices',
                        symbols: [
                            {
                                events: [],
                                name: 'Australian OTC Index',
                                underlying_symbol: 'OTC_AS51',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Dutch OTC Index',
                                underlying_symbol: 'OTC_AEX',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Euro 50 OTC Index',
                                underlying_symbol: 'OTC_SX5E',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'French OTC Index',
                                underlying_symbol: 'OTC_FCHI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'German OTC Index',
                                underlying_symbol: 'OTC_GDAXI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-25',
                                        descrip: 'Day After Mid-autumn Fest',
                                    },
                                ],
                                name: 'Hong Kong OTC Index',
                                underlying_symbol: 'OTC_HSI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-17',
                                        descrip: 'Respect-for-the-aged Day',
                                    },
                                    {
                                        dates: '2018-09-24',
                                        descrip: 'Autumnal Equinox Day (obs)',
                                    },
                                ],
                                name: 'Japanese OTC Index',
                                underlying_symbol: 'OTC_N225',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Swiss OTC Index',
                                underlying_symbol: 'OTC_SSMI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-08-27',
                                        descrip: 'Summer Bank Holiday',
                                    },
                                ],
                                name: 'UK OTC Index',
                                underlying_symbol: 'OTC_FTSE',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                name: 'US OTC Index',
                                underlying_symbol: 'OTC_SPC',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                name: 'US Tech 100 OTC Index',
                                underlying_symbol: 'OTC_NDX',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                name: 'Wall Street OTC Index',
                                underlying_symbol: 'OTC_DJI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Commodities',
                submarkets: [
                    {
                        name: 'Metals',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Gold/USD',
                                underlying_symbol: 'frxXAUUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Palladium/USD',
                                underlying_symbol: 'frxXPDUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Platinum/USD',
                                underlying_symbol: 'frxXPTUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Silver/USD',
                                underlying_symbol: 'frxXAGUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Energy',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: '2018-08-27',
                                        descrip: 'Summer Bank Holiday',
                                    },
                                ],
                                name: 'Oil/USD',
                                underlying_symbol: 'frxBROUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Volatility Indices',
                submarkets: [
                    {
                        name: 'Continuous Indices',
                        symbols: [
                            {
                                events: [],
                                name: 'Volatility 10 Index',
                                underlying_symbol: 'R_10',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 25 Index',
                                underlying_symbol: 'R_25',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 50 Index',
                                underlying_symbol: 'R_50',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 75 Index',
                                underlying_symbol: 'R_75',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 100 Index',
                                underlying_symbol: 'R_100',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                        ],
                    },
                    {
                        name: 'Daily Reset Indices',
                        symbols: [
                            {
                                events: [],
                                name: 'Bear Market Index',
                                underlying_symbol: 'RDBEAR',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Bull Market Index',
                                underlying_symbol: 'RDBULL',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

const sunday_trading_times = {
    echo_req: {
        trading_times: '2018-08-26',
    },
    msg_type: 'trading_times',
    trading_times: {
        markets: [
            {
                name: 'Forex',
                submarkets: [
                    {
                        name: 'Major Pairs',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/JPY',
                                underlying_symbol: 'frxAUDJPY',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/USD',
                                underlying_symbol: 'frxAUDUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/AUD',
                                underlying_symbol: 'frxEURAUD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/CAD',
                                underlying_symbol: 'frxEURCAD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/CHF',
                                underlying_symbol: 'frxEURCHF',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/GBP',
                                underlying_symbol: 'frxEURGBP',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/JPY',
                                underlying_symbol: 'frxEURJPY',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/USD',
                                underlying_symbol: 'frxEURUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/AUD',
                                underlying_symbol: 'frxGBPAUD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/JPY',
                                underlying_symbol: 'frxGBPJPY',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/USD',
                                underlying_symbol: 'frxGBPUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/CAD',
                                underlying_symbol: 'frxUSDCAD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/CHF',
                                underlying_symbol: 'frxUSDCHF',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/JPY',
                                underlying_symbol: 'frxUSDJPY',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Minor Pairs',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/CAD',
                                underlying_symbol: 'frxAUDCAD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/CHF',
                                underlying_symbol: 'frxAUDCHF',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/NZD',
                                underlying_symbol: 'frxAUDNZD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/NZD',
                                underlying_symbol: 'frxEURNZD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/CAD',
                                underlying_symbol: 'frxGBPCAD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/CHF',
                                underlying_symbol: 'frxGBPCHF',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/NOK',
                                underlying_symbol: 'frxGBPNOK',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/NZD',
                                underlying_symbol: 'frxGBPNZD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/PLN',
                                underlying_symbol: 'frxGBPPLN',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'NZD/JPY',
                                underlying_symbol: 'frxNZDJPY',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'NZD/USD',
                                underlying_symbol: 'frxNZDUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/MXN',
                                underlying_symbol: 'frxUSDMXN',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/NOK',
                                underlying_symbol: 'frxUSDNOK',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/PLN',
                                underlying_symbol: 'frxUSDPLN',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/SEK',
                                underlying_symbol: 'frxUSDSEK',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Basket Indices',
                submarkets: [
                    {
                        name: 'Forex Basket',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD Basket',
                                underlying_symbol: 'WLDAUD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR Basket',
                                underlying_symbol: 'WLDEUR',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP Basket',
                                underlying_symbol: 'WLDGBP',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD Basket',
                                underlying_symbol: 'WLDUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Commodities Basket',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'Gold Basket',
                                underlying_symbol: 'WLDXAU',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Indices',
                submarkets: [
                    {
                        name: 'Asia/Oceania',
                        symbols: [
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'chartonly',
                                name: 'Australian Index',
                                underlying_symbol: 'AS51',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 10,
                                events: [
                                    {
                                        dates: '2018-09-12, 2018-09-13',
                                        descrip: 'Ganesh Chaturthi',
                                    },
                                    {
                                        dates: '2018-09-20',
                                        descrip: 'Moharrum',
                                    },
                                ],
                                feed_license: 'delayed',
                                name: 'Bombay Index',
                                underlying_symbol: 'BSESENSEX30',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 60,
                                events: [
                                    {
                                        dates: '2018-09-25',
                                        descrip: 'Day After Mid-autumn Fest',
                                    },
                                ],
                                feed_license: 'delayed',
                                name: 'Hong Kong Index',
                                underlying_symbol: 'HSI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 1440,
                                events: [
                                    {
                                        dates: '2018-09-17',
                                        descrip: 'Respect-for-the-aged Day',
                                    },
                                    {
                                        dates: '2018-09-24',
                                        descrip: 'Autumnal Equinox Day (obs)',
                                    },
                                ],
                                feed_license: 'daily',
                                name: 'Japanese Index',
                                underlying_symbol: 'N225',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 1440,
                                events: [],
                                feed_license: 'daily',
                                name: 'Singapore Index',
                                underlying_symbol: 'STI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Europe/Africa',
                        symbols: [
                            {
                                events: [],
                                name: 'Belgian Index',
                                underlying_symbol: 'BFX',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Dutch Index',
                                underlying_symbol: 'AEX',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'French Index',
                                underlying_symbol: 'FCHI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'delayed',
                                name: 'German Index',
                                underlying_symbol: 'GDAXI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'delayed',
                                name: 'Irish Index',
                                underlying_symbol: 'ISEQ',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'delayed',
                                name: 'Norwegian Index',
                                underlying_symbol: 'OBX',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 30,
                                events: [
                                    {
                                        dates: '2018-09-24',
                                        descrip: 'Heritage Day',
                                    },
                                ],
                                feed_license: 'delayed',
                                name: 'South African Index',
                                underlying_symbol: 'TOP40',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 1440,
                                events: [],
                                feed_license: 'daily',
                                name: 'Swiss Index',
                                underlying_symbol: 'SSMI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Americas',
                        symbols: [
                            {
                                delay_amount: 1440,
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                feed_license: 'chartonly',
                                name: 'US Index',
                                underlying_symbol: 'SPC',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Middle East',
                        symbols: [
                            {
                                delay_amount: 1440,
                                events: [
                                    {
                                        dates: '2018-09-11',
                                        descrip: 'Islamic New Year',
                                    },
                                ],
                                feed_license: 'chartonly',
                                name: 'Dubai Index',
                                underlying_symbol: 'DFMGI',
                                times: {
                                    close: ['09:45:00'],
                                    open: ['06:00:00'],
                                    settlement: '12:45:00',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
                            },
                        ],
                    },
                    {
                        name: 'OTC Indices',
                        symbols: [
                            {
                                events: [],
                                name: 'Australian OTC Index',
                                underlying_symbol: 'OTC_AS51',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Dutch OTC Index',
                                underlying_symbol: 'OTC_AEX',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Euro 50 OTC Index',
                                underlying_symbol: 'OTC_SX5E',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'French OTC Index',
                                underlying_symbol: 'OTC_FCHI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'German OTC Index',
                                underlying_symbol: 'OTC_GDAXI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-25',
                                        descrip: 'Day After Mid-autumn Fest',
                                    },
                                ],
                                name: 'Hong Kong OTC Index',
                                underlying_symbol: 'OTC_HSI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-17',
                                        descrip: 'Respect-for-the-aged Day',
                                    },
                                    {
                                        dates: '2018-09-24',
                                        descrip: 'Autumnal Equinox Day (obs)',
                                    },
                                ],
                                name: 'Japanese OTC Index',
                                underlying_symbol: 'OTC_N225',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Swiss OTC Index',
                                underlying_symbol: 'OTC_SSMI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-08-27',
                                        descrip: 'Summer Bank Holiday',
                                    },
                                ],
                                name: 'UK OTC Index',
                                underlying_symbol: 'OTC_FTSE',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                name: 'US OTC Index',
                                underlying_symbol: 'OTC_SPC',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                name: 'US Tech 100 OTC Index',
                                underlying_symbol: 'OTC_NDX',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                name: 'Wall Street OTC Index',
                                underlying_symbol: 'OTC_DJI',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Commodities',
                submarkets: [
                    {
                        name: 'Metals',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Gold/USD',
                                underlying_symbol: 'frxXAUUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Palladium/USD',
                                underlying_symbol: 'frxXPDUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Platinum/USD',
                                underlying_symbol: 'frxXPTUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Silver/USD',
                                underlying_symbol: 'frxXAGUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Energy',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: '2018-08-27',
                                        descrip: 'Summer Bank Holiday',
                                    },
                                ],
                                name: 'Oil/USD',
                                underlying_symbol: 'frxBROUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Volatility Indices',
                submarkets: [
                    {
                        name: 'Continuous Indices',
                        symbols: [
                            {
                                events: [],
                                name: 'Volatility 10 Index',
                                underlying_symbol: 'R_10',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 25 Index',
                                underlying_symbol: 'R_25',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 50 Index',
                                underlying_symbol: 'R_50',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 75 Index',
                                underlying_symbol: 'R_75',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 100 Index',
                                underlying_symbol: 'R_100',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                        ],
                    },
                    {
                        name: 'Daily Reset Indices',
                        symbols: [
                            {
                                events: [],
                                name: 'Bear Market Index',
                                underlying_symbol: 'RDBEAR',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Bull Market Index',
                                underlying_symbol: 'RDBULL',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

const monday_trading_times = {
    echo_req: {
        trading_times: '2018-08-27',
    },
    msg_type: 'trading_times',
    trading_times: {
        markets: [
            {
                name: 'Forex',
                submarkets: [
                    {
                        name: 'Major Pairs',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/JPY',
                                underlying_symbol: 'frxAUDJPY',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/USD',
                                underlying_symbol: 'frxAUDUSD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/AUD',
                                underlying_symbol: 'frxEURAUD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/CAD',
                                underlying_symbol: 'frxEURCAD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/CHF',
                                underlying_symbol: 'frxEURCHF',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/GBP',
                                underlying_symbol: 'frxEURGBP',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/JPY',
                                underlying_symbol: 'frxEURJPY',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/USD',
                                underlying_symbol: 'frxEURUSD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/AUD',
                                underlying_symbol: 'frxGBPAUD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/JPY',
                                underlying_symbol: 'frxGBPJPY',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/USD',
                                underlying_symbol: 'frxGBPUSD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/CAD',
                                underlying_symbol: 'frxUSDCAD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/CHF',
                                underlying_symbol: 'frxUSDCHF',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/JPY',
                                underlying_symbol: 'frxUSDJPY',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Minor Pairs',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/CAD',
                                underlying_symbol: 'frxAUDCAD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/CHF',
                                underlying_symbol: 'frxAUDCHF',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD/NZD',
                                underlying_symbol: 'frxAUDNZD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR/NZD',
                                underlying_symbol: 'frxEURNZD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/CAD',
                                underlying_symbol: 'frxGBPCAD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/CHF',
                                underlying_symbol: 'frxGBPCHF',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/NOK',
                                underlying_symbol: 'frxGBPNOK',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/NZD',
                                underlying_symbol: 'frxGBPNZD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP/PLN',
                                underlying_symbol: 'frxGBPPLN',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'NZD/JPY',
                                underlying_symbol: 'frxNZDJPY',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'NZD/USD',
                                underlying_symbol: 'frxNZDUSD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/MXN',
                                underlying_symbol: 'frxUSDMXN',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/NOK',
                                underlying_symbol: 'frxUSDNOK',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/PLN',
                                underlying_symbol: 'frxUSDPLN',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD/SEK',
                                underlying_symbol: 'frxUSDSEK',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Basket Indices',
                submarkets: [
                    {
                        name: 'Forex Basket',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'AUD Basket',
                                underlying_symbol: 'WLDAUD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'EUR Basket',
                                underlying_symbol: 'WLDEUR',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'GBP Basket',
                                underlying_symbol: 'WLDGBP',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'USD Basket',
                                underlying_symbol: 'WLDUSD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Commodities Basket',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                ],
                                name: 'Gold Basket',
                                underlying_symbol: 'WLDXAU',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Indices',
                submarkets: [
                    {
                        name: 'Asia/Oceania',
                        symbols: [
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'chartonly',
                                name: 'Australian Index',
                                underlying_symbol: 'AS51',
                                times: {
                                    close: ['06:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '09:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 10,
                                events: [
                                    {
                                        dates: '2018-09-12, 2018-09-13',
                                        descrip: 'Ganesh Chaturthi',
                                    },
                                    {
                                        dates: '2018-09-20',
                                        descrip: 'Moharrum',
                                    },
                                ],
                                feed_license: 'delayed',
                                name: 'Bombay Index',
                                underlying_symbol: 'BSESENSEX30',
                                times: {
                                    close: ['10:00:00'],
                                    open: ['03:45:00'],
                                    settlement: '13:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 60,
                                events: [
                                    {
                                        dates: '2018-09-25',
                                        descrip: 'Day After Mid-autumn Fest',
                                    },
                                ],
                                feed_license: 'delayed',
                                name: 'Hong Kong Index',
                                underlying_symbol: 'HSI',
                                times: {
                                    close: ['03:59:00', '07:40:00'],
                                    open: ['01:30:00', '05:00:00'],
                                    settlement: '10:40:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 1440,
                                events: [
                                    {
                                        dates: '2018-09-17',
                                        descrip: 'Respect-for-the-aged Day',
                                    },
                                    {
                                        dates: '2018-09-24',
                                        descrip: 'Autumnal Equinox Day (obs)',
                                    },
                                ],
                                feed_license: 'daily',
                                name: 'Japanese Index',
                                underlying_symbol: 'N225',
                                times: {
                                    close: ['02:30:00', '06:00:00'],
                                    open: ['00:00:00', '03:30:00'],
                                    settlement: '09:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 1440,
                                events: [],
                                feed_license: 'daily',
                                name: 'Singapore Index',
                                underlying_symbol: 'STI',
                                times: {
                                    close: ['09:00:00'],
                                    open: ['01:00:00'],
                                    settlement: '12:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Europe/Africa',
                        symbols: [
                            {
                                events: [],
                                name: 'Belgian Index',
                                underlying_symbol: 'BFX',
                                times: {
                                    close: ['15:30:00'],
                                    open: ['07:00:00'],
                                    settlement: '18:30:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Dutch Index',
                                underlying_symbol: 'AEX',
                                times: {
                                    close: ['15:30:00'],
                                    open: ['07:00:00'],
                                    settlement: '18:30:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'French Index',
                                underlying_symbol: 'FCHI',
                                times: {
                                    close: ['15:30:00'],
                                    open: ['07:00:00'],
                                    settlement: '18:30:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'delayed',
                                name: 'German Index',
                                underlying_symbol: 'GDAXI',
                                times: {
                                    close: ['15:30:00'],
                                    open: ['07:00:00'],
                                    settlement: '18:30:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'delayed',
                                name: 'Irish Index',
                                underlying_symbol: 'ISEQ',
                                times: {
                                    close: ['15:30:00'],
                                    open: ['07:00:00'],
                                    settlement: '21:30:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 15,
                                events: [],
                                feed_license: 'delayed',
                                name: 'Norwegian Index',
                                underlying_symbol: 'OBX',
                                times: {
                                    close: ['14:30:00'],
                                    open: ['07:00:00'],
                                    settlement: '17:30:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 30,
                                events: [
                                    {
                                        dates: '2018-09-24',
                                        descrip: 'Heritage Day',
                                    },
                                ],
                                feed_license: 'delayed',
                                name: 'South African Index',
                                underlying_symbol: 'TOP40',
                                times: {
                                    close: ['14:50:00'],
                                    open: ['07:00:00'],
                                    settlement: '17:50:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                delay_amount: 1440,
                                events: [],
                                feed_license: 'daily',
                                name: 'Swiss Index',
                                underlying_symbol: 'SSMI',
                                times: {
                                    close: ['15:20:00'],
                                    open: ['07:00:00'],
                                    settlement: '18:20:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Americas',
                        symbols: [
                            {
                                delay_amount: 1440,
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                feed_license: 'chartonly',
                                name: 'US Index',
                                underlying_symbol: 'SPC',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['13:30:00'],
                                    settlement: '22:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Middle East',
                        symbols: [
                            {
                                delay_amount: 1440,
                                events: [
                                    {
                                        dates: '2018-09-11',
                                        descrip: 'Islamic New Year',
                                    },
                                ],
                                feed_license: 'chartonly',
                                name: 'Dubai Index',
                                underlying_symbol: 'DFMGI',
                                times: {
                                    close: ['09:45:00'],
                                    open: ['06:00:00'],
                                    settlement: '12:45:00',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
                            },
                        ],
                    },
                    {
                        name: 'OTC Indices',
                        symbols: [
                            {
                                events: [],
                                name: 'Australian OTC Index',
                                underlying_symbol: 'OTC_AS51',
                                times: {
                                    close: ['06:30:00', '20:00:00'],
                                    open: ['00:00:00', '07:30:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Dutch OTC Index',
                                underlying_symbol: 'OTC_AEX',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Euro 50 OTC Index',
                                underlying_symbol: 'OTC_SX5E',
                                times: {
                                    close: ['19:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '21:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'French OTC Index',
                                underlying_symbol: 'OTC_FCHI',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'German OTC Index',
                                underlying_symbol: 'OTC_GDAXI',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-25',
                                        descrip: 'Day After Mid-autumn Fest',
                                    },
                                ],
                                name: 'Hong Kong OTC Index',
                                underlying_symbol: 'OTC_HSI',
                                times: {
                                    close: ['04:00:00', '08:00:00'],
                                    open: ['01:30:00', '05:00:00'],
                                    settlement: '10:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-17',
                                        descrip: 'Respect-for-the-aged Day',
                                    },
                                    {
                                        dates: '2018-09-24',
                                        descrip: 'Autumnal Equinox Day (obs)',
                                    },
                                ],
                                name: 'Japanese OTC Index',
                                underlying_symbol: 'OTC_N225',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['00:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [],
                                name: 'Swiss OTC Index',
                                underlying_symbol: 'OTC_SSMI',
                                times: {
                                    close: ['16:00:00'],
                                    open: ['07:00:00'],
                                    settlement: '18:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-08-27',
                                        descrip: 'Summer Bank Holiday',
                                    },
                                ],
                                name: 'UK OTC Index',
                                underlying_symbol: 'OTC_FTSE',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                name: 'US OTC Index',
                                underlying_symbol: 'OTC_SPC',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                name: 'US Tech 100 OTC Index',
                                underlying_symbol: 'OTC_NDX',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Labor Day',
                                    },
                                ],
                                name: 'Wall Street OTC Index',
                                underlying_symbol: 'OTC_DJI',
                                times: {
                                    close: ['20:00:00'],
                                    open: ['06:00:00'],
                                    settlement: '22:00:00',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Commodities',
                submarkets: [
                    {
                        name: 'Metals',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Gold/USD',
                                underlying_symbol: 'frxXAUUSD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Palladium/USD',
                                underlying_symbol: 'frxXPDUSD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Platinum/USD',
                                underlying_symbol: 'frxXPTUSD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                            {
                                events: [
                                    {
                                        dates: 'Fridays',
                                        descrip: 'Closes early (at 21:00)',
                                    },
                                    {
                                        dates: '2018-09-03',
                                        descrip: 'Closes early (at 16:30)',
                                    },
                                ],
                                name: 'Silver/USD',
                                underlying_symbol: 'frxXAGUSD',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                    {
                        name: 'Energy',
                        symbols: [
                            {
                                events: [
                                    {
                                        dates: '2018-08-27',
                                        descrip: 'Summer Bank Holiday',
                                    },
                                ],
                                name: 'Oil/USD',
                                underlying_symbol: 'frxBROUSD',
                                times: {
                                    close: ['--'],
                                    open: ['--'],
                                    settlement: '--',
                                },
                                trading_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Volatility Indices',
                submarkets: [
                    {
                        name: 'Continuous Indices',
                        symbols: [
                            {
                                events: [],
                                name: 'Volatility 10 Index',
                                underlying_symbol: 'R_10',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 25 Index',
                                underlying_symbol: 'R_25',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 50 Index',
                                underlying_symbol: 'R_50',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 75 Index',
                                underlying_symbol: 'R_75',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Volatility 100 Index',
                                underlying_symbol: 'R_100',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                        ],
                    },
                    {
                        name: 'Daily Reset Indices',
                        symbols: [
                            {
                                events: [],
                                name: 'Bear Market Index',
                                underlying_symbol: 'RDBEAR',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                            {
                                events: [],
                                name: 'Bull Market Index',
                                underlying_symbol: 'RDBULL',
                                times: {
                                    close: ['23:59:59'],
                                    open: ['00:00:00'],
                                    settlement: '23:59:59',
                                },
                                trading_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

export default class DummyBinaryAPI {
    constructor() {
        this.getTradingTimes = sinon.fake(this.getTradingTimes.bind(this));
    }

    getTradingTimes(date: string) {
        let trading_times = friday_trading_times;
        if (date === '2018-08-25') trading_times = saturday_trading_times;
        if (date === '2018-08-26') trading_times = sunday_trading_times;
        if (date === '2018-08-27') trading_times = monday_trading_times;
        return Promise.resolve(trading_times);
    }

    getServerTime() {
        const time = new Date().getTime() / 1000;
        const serverTime = {
            echo_req: {
                time: 1,
            },
            msg_type: 'time',
            time,
        };

        return Promise.resolve(serverTime);
    }
}
