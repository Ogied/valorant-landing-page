import { Component, OnInit } from '@angular/core';
import { Agent } from '../shared/models/agent.model';
import { AgentsService } from '../core/service/agents/agents.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  agents: Array<Agent> = [];
  agentName: string;

  constructor(private agentsService: AgentsService) { }

  ngOnInit(): void {
    this.agents = this.agentsService.getAllAgents();
  }

  getAllAgents(): void {
    this.agents = this.agentsService.getAllAgents();
  }

  getAgentsByType(id: string): void {
    this.agents = this.agentsService.getAgentsBy(id);
  }

  getAgentByName(): void {
    this.agents = this.agentsService.getAgentByName(this.agentName);
  }
}
