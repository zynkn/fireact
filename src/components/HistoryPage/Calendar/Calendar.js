import React, { Component } from 'react';

import styles from './Calendar.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';

const cx = classNames.bind(styles);


class Calendar extends Component {
  render() {
    return (
      <div className={cx('calendar-wrap')}>
        <div className={cx('header')}>
          <Icon icon={ic_keyboard_arrow_left} size={24} style={{ color: '#4b4b4b' }} />
          <span className={cx('title')}>November 2018</span>
          <Icon icon={ic_keyboard_arrow_right} size={24} style={{ color: '#4b4b4b' }} />
        </div>
        <table className={cx('calendar')}>
          <thead>
            <tr>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>1</span></td>
              <td><span>2</span></td>
              <td><span>3</span></td>
              <td className={cx('selected')}><span>4</span></td>
              <td><span>5</span></td>
              <td><span>6</span></td>
              <td><span>7</span></td>
            </tr>
            <tr>
              <td><span>8</span></td>
              <td><span>9</span></td>
              <td><span>10</span></td>
              <td><span>11</span></td>
              <td><span>12</span></td>
              <td><span>13</span></td>
              <td><span>14</span></td>
            </tr>
            <tr>
              <td><span>15</span></td>
              <td><span>16</span></td>
              <td><span>17</span></td>
              <td><span>18</span></td>
              <td><span>19</span></td>
              <td><span>20</span></td>
              <td><span>21</span></td>
            </tr>
            <tr>
              <td><span>22</span></td>
              <td><span>23</span></td>
              <td><span>24</span></td>
              <td><span>25</span></td>
              <td><span>26</span></td>
              <td><span>27</span></td>
              <td><span>28</span></td>
            </tr>
            <tr>
              <td><span>29</span></td>
              <td><span>30</span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default Calendar;