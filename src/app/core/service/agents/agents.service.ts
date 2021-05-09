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
      biography: '',
      country: 'Brasil',
      type: AgentType.Duelist
    },
    {
      id: 1,
      name: 'Reyna',
      biography: '',
      country: 'Mexico',
      type: AgentType.Duelist
    },
    {
      id: 2,
      name: 'Jett',
      biography: '',
      country: 'Korea',
      type: AgentType.Duelist
    },
    {
      id: 3,
      name: 'Phoenix',
      biography: '',
      country: 'Africa',
      type: AgentType.Duelist
    },
    {
      id: 4,
      name: 'Sage',
      biography: '',
      country: 'China',
      type: AgentType.Sentinel
    },
    {
      id: 5,
      name: 'Killjoy',
      biography: '',
      country: 'Germany',
      type: AgentType.Sentinel
    },
    {
      id: 6,
      name: 'Cypher',
      biography: '',
      country: 'Israel',
      type: AgentType.Sentinel
    },
    {
      id: 7,
      name: 'Viper',
      biography: '',
      country: 'Canada',
      type: AgentType.Controller
    },
    {
      id: 8,
      name: 'Omen',
      biography: '',
      country: 'England',
      type: AgentType.Controller
    },
    {
      id: 9,
      name: 'Brimstone',
      biography: '',
      country: 'Ireland',
      type: AgentType.Controller
    },
    {
      id: 10,
      name: 'Sova',
      biography: '',
      country: 'Russia',
      type: AgentType.Initiator
    },
    {
      id: 11,
      name: 'Breach',
      biography: '',
      country: 'Ireland',
      type: AgentType.Initiator
    },
    {
      id: 12,
      name: 'Skye',
      biography: '',
      country: 'South Africa',
      type: AgentType.Initiator
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
