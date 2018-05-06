/**
 * Created on 4/5/2018.
 * @author vita
 * @desc out of game constant controls
 */

const CONTROL = 6;

const LOBBY_CREATE_GAME_CONTROL = {
  type: CONTROL,
  x: 533,
  y: 469,
  xsize: 120,
  ysize: 20,
};
const LOBBY_JOIN_GAME_CONTROL = {
  type: CONTROL,
  x: 652,
  y: 469,
  xsize: 120,
  ysize: 20,
};
const LOBBY_JOIN_CHANNEL_CONTROL = {
  type: CONTROL,
  x: 27,
  y: 480,
  xsize: 120,
  ysize: 20,
};
const MAIN_MENU_SINGLE_PLAYER_CONTROL = {
  type: CONTROL,
  x: 264,
  y: 324,
  xsize: 272,
  ysize: 35,
};
const MAIN_MENU_OTHER_MULTIPLAYER_CONTROL = {
  type: CONTROL,
  x: 264,
  y: 433,
  xsize: 272,
  ysize: 35,
};
const MAIN_MENU_LOGIN_CONTROL = {
  type: CONTROL,
  x: 264,
  y: 366,
  xsize: 272,
  ysize: 35,
};
const MAIN_MENU_CONNECTING_CANCEL_CONTROL = {
  type: CONTROL,
  x: 330,
  y: 416,
  xsize: 128,
  ysize: 35,
};
const MAIN_MENU_GATEWAY_CONTROL = {
  type: CONTROL,
  x: 264,
  y: 391,
  xsize: 272,
  ysize: 25,
};
// same for ok and cancel but we should never need cancel;
const GATEWAY_OK_CONTROL = {
  type: CONTROL,
  x: 281,
  y: 538,
  xsize: 96,
  ysize: 32,
};
// log in screen login button
const LOGIN_LOGIN_CONTROL = {
  type: CONTROL,
  x: 264,
  y: 484,
  xsize: 272,
  ysize: 35,
};
const CHARACTER_SELECT_OK_CONTROL = {
  type: CONTROL,
  x: 627,
  y: 572,
  xsize: 128,
  ysize: 35,
};
const CHARACTER_SELECT_EXIT_CONTROL = {
  type: CONTROL,
  x: 33,
  y: 572,
  xsize: 128,
  ysize: 35,
};
const CREATE_GAME_CREATE_CONTROL = {
  type: CONTROL,
  x: 594,
  y: 433,
  xsize: 172,
  ysize: 32,
};
const CREATE_GAME_NORMAL_CONTROL = {
  type: CONTROL,
  x: 430,
  y: 381,
  xsize: 16,
  ysize: 16,
};
const CREATE_GAME_NIGHTMARE_CONTROL = {
  type: CONTROL,
  x: 555,
  y: 381,
  xsize: 16,
  ysize: 16,
};
const CREATE_GAME_HELL_CONTROL = {
  type: CONTROL,
  x: 698,
  y: 381,
  xsize: 16,
  ysize: 16,
};
const CREDITS_EXIT_CONTROL = {
  type: 6,
  x: 33,
  y: 578,
  xsize: 128,
  ysize: 35,
};
const CINEMATICS_CANCEL_CONTROL = {
  type: 6,
  x: 334,
  y: 488,
  xsize: 128,
  ysize: 35,
};
const SINGLE_PLAYER_NORMAL_CONTROL = {
  type: 6,
  x: 264,
  y: 297,
  xsize: 272,
  ysize: 35,
};
const SINGLE_PLAYER_NIGHTMARE_CONTROL = {
  type: 6,
  x: 264,
  y: 340,
  xsize: 272,
  ysize: 35,
};
const SINGLE_PLAYER_HELL_CONTROL = {
  type: 6,
  x: 264,
  y: 383,
  xsize: 272,
  ysize: 35,
};
const OTHER_MULTIPLAYER_CANCEL_CONTROL = {
  type: 6,
  x: 264,
  y: 568,
  xsize: 272,
  ysize: 35,
};
const OTHER_MULTIPLAYER_TCP_CONTROL = {
  type: 6,
  x: 264,
  y: 350,
  xsize: 272,
  ysize: 35,
};
const OTHER_MULTIPLAYER_JOIN_CONTROL = {
  type: 6,
  x: 265,
  y: 264,
  xsize: 272,
  ysize: 35,
};
const OTHER_MULTIPLAYER_HOST_CONTROL = {
  type: 6,
  x: 265,
  y: 206,
  xsize: 272,
  ysize: 35,
};
// Map controls to string
const DIFFICULTY_CONTROLS = {
  'normal': CREATE_GAME_NORMAL_CONTROL,
  'nightmare': CREATE_GAME_NIGHTMARE_CONTROL,
  'hell': CREATE_GAME_HELL_CONTROL,
};
const SINGLE_PLAYER_DIFFICULTY_CONTROLS = {
  'normal': SINGLE_PLAYER_NORMAL_CONTROL,
  'nightmare': SINGLE_PLAYER_NIGHTMARE_CONTROL,
  'hell': SINGLE_PLAYER_HELL_CONTROL,
};
