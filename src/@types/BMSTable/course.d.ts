/**
 * Optional Key
 * Trophies, terms of putting
 */
interface Trophy{
  name: string;      // Trophy name(e.g. "goldmedal", "silvermedal")
  missrate: number;  // Trophy putting term(MissCount percentage, upperLimit)
  scorerate: number; // Trophy putting term(Score percentage, lowerLimit)
}

/**
 * Skill Analyze Course
 */
export interface SkillAnalyzeCourse{
  name: string;// Skill name(e.g. "初段", "二段"...)
  style: string;// Course title's style definition(e.g. "-fx-text-fill:red")
  md5: Array<string>;// song list(md5 hash's of BMS file)
}

/**
 * Optional Key
 * For Skill Analyze course, etc
 * More Details: https://github.com/exch-bms2/jbmstable-parser/wiki/%E9%9B%A3%E6%98%93%E5%BA%A6%E8%A1%A8%E3%81%AE%E4%BB%95%E6%A7%98
 */
export interface Course{
  /**
   * Requirements
   */
  name: string;               // Course Name(e.g. "七段", "ノースピ七段")

  /**
   * Optional Keys
   */
  constraint?: Array<string>; // Playing Rules(e.g. "grade_random", "no_speed")
  trophy?: Array<Trophy>;     // Trophy(medal) types, terms of that
  style?: string;             // course title's color("七段" => "cyan", "八段" => "red")

  charts?: Array<unknown>;    // song list(Cant definition of that's types.)
  md5?: Array<string>;        // song list(md5 hash's of BMS file)
}
