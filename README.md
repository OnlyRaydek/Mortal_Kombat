# Getting Started with Mortal Kombat

You can try it by yourself [DEMO LINK](https://onlyraydek.github.io/Mortal_Kombat).

## Задание

задача: реализвать несколько стартовых из игры mortal combat с управлением от клавиатуры

экраны:
- (1) выбор бойца (https://www.youtube.com/watch?v=mrRL8DozJ5Y)
- (2) представление бойца / vs screen (https://www.youtube.com/watch?v=-hRTaVUwVh0)

детали реализации:
- управлние для (1) с клавиатуры через ArrowUp / Arrow Down / ArrowLeft / ArrowRigt
- 6 иконок внизу (2) должны работать как в оригинальной игре (versus codes), ротация ограниченного списка символов должно происходить клавишами QWERTY, по клвише на каждый символ
- переход с (1) на (2) должен происхить через 2 секунды после выбора последнего бойца
- длительность показа 2го экрана: 4 секунды

подсказки:
- наличие оригинальных иконок не принципиально
- анимация выбранного героя не важна

бонусные задания:
- возможность выбора выбора 2ым игроком бойца
- комбинации на (2) должны вызывать эффекты (нарп., сообщения на экране или воспроизведение звуков) - пасхалки на выбор соискателя
- возможность взаимодействия пары игровых клиентов по сети

## Запуск проекта

для запуска проекта локально используйте комманду:
### `npm start`

Проект запустится по порту 3000.\
Перейдите по [http://localhost:3000](http://localhost:3000) чтобы отобразить приложение в Вашем браузере.

## Реализация

На первом экране показывается меню выбора персонажей.
Выбор чемпиона первым игроком осуществляется клавишами стрелок (ArrowUp, ArrowDown, ArrowLeft, ArrowRight).
Выбор чемпиона вторым игроком осуществляется клавишами I, K, J, L (вне зависимости от регистра).

После того, как игроки выбрали чемпионов нажатием Enter подтверждается выбор, после которого игроки переходят на экран превью Versus Screen.
На этом этапе вы можете посредством клавиш q, w, e, r, t, y (вне зависимости от регистра) сменять режим битвы, как и в оригинальной игре.
Через 4 секунды экран превью сменяется заставкой с эмблемой мортал комбата.
