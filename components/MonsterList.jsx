"use client";

import { useQuery } from '@tanstack/react-query';

async function getApiData() {
	const res = await fetch(
		"/compendium/data/monsters.json",
	);
	return res.json();
}
function renderLine(){
	return (
		<svg height="5" width="100%" class="tapered-rule">
			<polyline points="0,0 400,2.5 0,5"></polyline>
		</svg>
	)
}
function renderMonster(mon){
	const skills = [
		'skill_acrobatics',
		'skill_animal_handling',
		'skill_arcana',
		'skill_athletics',
		'skill_deception',
		'skill_history',
		'skill_insight',
		'skill_intimidation',
		'skill_investigation',
		'skill_medicine',
		'skill_nature',
		'skill_perception',
		'skill_performance',
		'skill_persuasion',
		'skill_religion',
		'skill_sleight_of_hand',
		'skill_stealth',
		'skill_survival'
	]
  if(mon && mon.name) {
	return (
		<div class="mon-stat-block">
			<div class="mon-stat-block-inner">
				<div class="mon-stat-block__header">
					<div class="monster-heading">
						<h1>{ mon.name }</h1>
						<h2>{ mon.size }, { mon.alignment }</h2>
					</div>
				</div>
				{renderLine()}
				<div class="mon-stat-block__attributes">
					<div class="mon-stat-block__attribute">
						<span class="mon-stat-block__attribute-label">Armor Class</span>
						<span class="mon-stat-block__attribute-value">
							<span class="mon-stat-block__attribute-data-value">
								{ mon.armor_class }
							</span>
							{ mon.armor_type &&
								<span class="mon-stat-block__attribute-data-extra">
								{ mon.armor_type }
								</span> 
							}
						</span>
					</div>
				<div class="mon-stat-block__attribute">
					<span class="mon-stat-block__attribute-label">Hit Points</span>
					<span class="mon-stat-block__attribute-data">
						<span class="mon-stat-block__attribute-data-value" contenteditable="true">
						{ mon.hit_points }
						</span>
						<span class="mon-stat-block__attribute-data-extra">
						{ mon.hit_points_roll }
						</span>      
					</span>
				</div>
				<div class="mon-stat-block__attribute">
					<span class="mon-stat-block__attribute-label">Speed</span>
					<span class="mon-stat-block__attribute-data">
						<span class="mon-stat-block__attribute-data-value">
						{ mon.speed }
						</span>
					</span>
				</div>
			</div>
			<div class="mon-stat-block__stat-block">
			<svg height="5" width="100%" class="tapered-rule">
				<polyline points="0,0 400,2.5 0,5"></polyline>
			</svg>
				<div class="ability-block">
					<div class="ability-block__stat ability-block__stat--str">
						<div class="ability-block__heading">STR</div>
						<div class="ability-block__data">
							<span class="ability-block__score">{ mon.str }</span>
							<span class="ability-block__modifier">{ mon.str_mod }</span>
						</div>
					</div>
					<div class="ability-block__stat ability-block__stat--dex">
						<div class="ability-block__heading">DEX</div>
						<div class="ability-block__data">
							<span class="ability-block__score">{ mon.dex }</span>
							<span class="ability-block__modifier">{ mon.dex_mod }</span>
						</div>
					</div>
					<div class="ability-block__stat ability-block__stat--con">
						<div class="ability-block__heading">CON</div>
						<div class="ability-block__data">
							<span class="ability-block__score">{ mon.con }</span>
							<span class="ability-block__modifier">{ mon.con_mod }</span>
							
						</div>
					</div>
					<div class="ability-block__stat ability-block__stat--int">
						<div class="ability-block__heading">INT</div>
						<div class="ability-block__data">
							<span class="ability-block__score">{ mon.int }</span>
							<span class="ability-block__modifier">{ mon.int_mod }</span>
						</div>
					</div>
					<div class="ability-block__stat ability-block__stat--wis">
						<div class="ability-block__heading">WIS</div>
						<div class="ability-block__data">
							<span class="ability-block__score">{ mon.wis }</span>
							<span class="ability-block__modifier">{ mon.wis_mod }</span>
						</div>
					</div>
					<div class="ability-block__stat ability-block__stat--cha">
						<div class="ability-block__heading">CHA</div>
						<div class="ability-block__data">
							<span class="ability-block__score">{ mon.cha }</span>
							<span class="ability-block__modifier">{ mon.cha_mod }</span>
						</div>
					</div>
				</div>
				<svg height="5" width="100%" class="tapered-rule">
				<polyline points="0,0 400,2.5 0,5"></polyline>
				</svg>
			</div>
			<div class="mon-stat-block__tidbits">
			<div class="mon-stat-block__tidbit">
				{ mon.show_skill &&
					<span class="mon-stat-block__tidbit-label">Skills</span>
				}
				<span class="mon-stat-block__tidbit-data">
					{skills.map((skill) => {
						<>
							{mon.skill_investigation && <>
								<a class="tooltip-hover skill-tooltip">Investigation</a> {mon.skill_investigation}
							</>}
						</>
					})}
				</span>
			</div>
			<div class="mon-stat-block__attribute">
				<span class="mon-stat-block__attribute-label">Senses</span>
				<span class="mon-stat-block__attribute-data">
					{ mon.senses }
				</span>
			</div>
			<div class="mon-stat-block__attribute">
				<span class="mon-stat-block__attribute-label">Languages</span>
				<span class="mon-stat-block__attribute-data">
					{ mon.languages }  
				</span>
			</div>
			<div class="mon-stat-block__attribute">
				<span class="mon-stat-block__attribute-label">Challenge</span>
				<span class="mon-stat-block__attribute-data">
					{ mon.challenge }
				</span>
			</div>
			<div class="mon-stat-block__attribute">
				<span class="mon-stat-block__attribute-label">Proficiency Bonus</span>
				<span class="mon-stat-block__attribute-data">
					{ mon.prof_bonus }
				</span>
			</div>
			</div>
			<svg height="5" width="100%" class="tapered-rule">
			<polyline points="0,0 400,2.5 0,5"></polyline>
			</svg>
			<div class="mon-stat-block__description-blocks">
				<div class="mon-stat-block__description-block"> 
				<div class="mon-stat-block__description-block-content">
						render traits here            
				</div>
				</div>
				<div class="mon-stat-block__description-block">
				<div class="mon-stat-block__description-block-heading">Actions</div>
				<div class="mon-stat-block__description-block-content">
					<p>
						<strong>{ mon.action1_name }</strong>
						<span>{ mon.action1_desc }</span>
					</p>
					<p>
						<strong>{ mon.action2_name }</strong>
						<span>{ mon.action2_desc }</span>
						<em>Attack:</em> <span data-dicenotation="{ mon.action2_attack }" data-rolltype="to hit" data-rollaction="Bite">{ mon.action2_attack }</span>
						<em>Damage:</em> <span data-dicenotation="{ mon.action2_dmg1_value }" data-rolltype="damage" data-rollaction="Bite" data-rolldamagetype="piercing">({ mon.action2_dmg1_value })</span> { mon.action2_dmg1_type }
						<div>{ mon.action2_desc2 }</div>
					</p>                            
				</div>
				</div>
			</div>
		  </div>
		</div>
	)
} else {
  return null
}
}
export default function MonsterList() {
	const { data }  = useQuery({ queryKey: ["myData"], queryFn: getApiData });

	console.log(data)
	return (
	  <div>
			{renderMonster(data && data['displacer-beast'])}
	  </div>
	);
  }
  