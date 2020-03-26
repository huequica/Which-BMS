import { Course, SkillAnalyzeCourse } from './course';

/**
 * Header JSON Types Definition
 * More Details: https://github.com/exch-bms2/jbmstable-parser/wiki/%E9%9B%A3%E6%98%93%E5%BA%A6%E8%A1%A8%E3%81%AE%E4%BB%95%E6%A7%98
 */
export interface HeaderJSON{
  /**
   * Requirements
   */
  name: string;                       // Name of Difficulty Table
  data_url: string;                   // Address at Data JSON
  symbol: string;                     // Difficulty Table Identity Icon(▽, ☆, etc...)

  /**
   * Optional Keys
   */
  tag?: string;                       // TODO: ここのキーの用途がマジでドキュメント読んでもわからん
  level_order?: Array<string|number>; // Level Labelling Array
                                      // e.g. `[1,2,3,4,5,6,7,8,9,10,11,"11+",12,"12+"]`
  course?: Array<Array<Course>>;      // Course Type("ノースピ", "No GOOD") => Course
  glade?: Array<SkillAnalyzeCourse>;  // Skill Analyze courses
  attr?: Array<unknown>;
}