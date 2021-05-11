import { Injectable } from '@angular/core';
import { Agent } from '../../../shared/models/agent.model';
import { AgentType } from '../../../shared/enum/agent-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  agents: Array<Agent> = [
    {
      id: 0,
      name: 'Raze',
      biography: `Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”`,
      country: 'Brasil',
      type: AgentType.Duelist,
      image: '../../../assets/raze.png'
    },
    {
      id: 1,
      name: 'Jett',
      biography: `Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.`,
      country: 'South Korea',
      type: AgentType.Duelist,
      image: '../../../assets/jett.png'
    },
    {
      id: 2,
      name: 'Phoenix',
      biography: `Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.`,
      country: 'United Kingdom',
      type: AgentType.Duelist,
      image: '../../../assets/phoenix.png'
    },
    {
      id: 3,
      name: 'Sage',
      biography: `The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.`,
      country: 'China',
      type: AgentType.Sentinel,
      image: '../../../assets/sage.png'
    },
    {
      id: 4,
      name: 'Killjoy',
      biography: `The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.`,
      country: 'Germany',
      type: AgentType.Sentinel,
      image: '../../../assets/killjoy.png'
    },
    {
      id: 5,
      name: 'Cypher',
      biography: `The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.`,
      country: 'Morocco',
      type: AgentType.Sentinel,
      image: '../../../assets/cypher.png'
    },
    {
      id: 6,
      name: 'Viper',
      biography: `The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.`,
      country: 'United States',
      type: AgentType.Controller,
      image: '../../../assets/viper.png'
    },
    {
      id: 7,
      name: 'Omen',
      biography: `A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.`,
      country: 'Unkown',
      type: AgentType.Controller,
      image: '../../../assets/omen.png'
    },
    {
      id: 8,
      name: 'Brimstone',
      biography: `Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.`,
      country: 'United States',
      type: AgentType.Controller,
      image: '../../../assets/brimstone.png'
    },
    {
      id: 9,
      name: 'Sova',
      biography: `Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide`,
      country: 'Russia',
      type: AgentType.Initiator,
      image: '../../../assets/sova.png'
    },
    {
      id: 10,
      name: 'Breach',
      biography: `Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.`,
      country: 'Sweden',
      type: AgentType.Initiator,
      image: '../../../assets/breach.png'
    },
    {
      id: 11,
      name: 'Skye',
      biography: `Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.`,
      country: 'Australia',
      type: AgentType.Initiator,
      image: '../../../assets/skye.png'
    },
  ];

  constructor() { }

  getAllAgents(): Array<Agent> {
    return this.agents;
  }

  getAgentsBy(type: string): Array<Agent> {
    return this.agents.filter(agent => agent.type === Number(type));
  }

  getAgentByName(name: string): Array<Agent> {
    const agentFound = this.agents.find(agent => agent.name === name);
    if (agentFound) {
      return [agentFound];
    }
    return [{
      id: 0,
      name: 'No te encontre',
      biography: '',
      country: 'No tengo pais, nadie me quiere todos me odian',
      type: 0
    }];
  }
}
