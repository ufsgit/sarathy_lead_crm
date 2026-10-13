import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-campaign-dashboard',
  templateUrl: './Campaign_Dashboard.component.html',
  styleUrls: ['./Campaign_Dashboard.component.css']
})
export class Campaign_DashboardComponent implements OnInit {

  isLoading: boolean = false;
  
  // Data for summary view
  campaignSummaryList: any[] = [];
  grandTotalLeads: number = 0;

  // Data for details view
  selectedCampaign: any = null;
  campaignLeadsList: any[] = [];
  
  // View states
  isDetailView: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadDashboardSummary();
  }

  loadDashboardSummary() {
    this.isLoading = true;
    this.http.get<any[]>(environment.BasePath + 'Campaign/dashboard_summary').subscribe(
      res => {
        this.campaignSummaryList = res || [];
        this.grandTotalLeads = this.campaignSummaryList.reduce((acc, curr) => acc + (curr.Total_Leads || 0), 0);
        this.isLoading = false;
      },
      err => {
        console.error("Error loading campaign dashboard summary", err);
        this.isLoading = false;
      }
    );
  }

  viewCampaignLeads(campaign: any) {
    this.selectedCampaign = campaign;
    this.isDetailView = true;
    this.isLoading = true;
    
    this.http.get<any[]>(environment.BasePath + 'Campaign/leads/' + campaign.campaign_details_id).subscribe(
      res => {
        this.campaignLeadsList = res || [];
        this.isLoading = false;
      },
      err => {
        console.error("Error loading leads for campaign", err);
        this.isLoading = false;
      }
    );
  }

  backToSummary() {
    this.isDetailView = false;
    this.selectedCampaign = null;
    this.campaignLeadsList = [];
  }

  // Live Meta Campaigns View
  activeTab: 'crm' | 'meta' = 'crm';
  adAccounts: any[] = [];
  selectedAdAccountId: string = '';
  liveMetaCampaigns: any[] = [];
  activeMetaCampaigns: any[] = [];
  pausedMetaCampaigns: any[] = [];

  switchTab(tab: 'crm' | 'meta') {
    this.activeTab = tab;
    if (tab === 'meta' && this.adAccounts.length === 0) {
      this.loadAdAccounts();
    }
  }

  loadAdAccounts() {
    this.isLoading = true;
    this.http.get<any[]>(environment.BasePath + 'Campaign/facebook_ad_accounts').subscribe(
      res => {
        this.adAccounts = res || [];
        if (this.adAccounts.length > 0) {
          this.selectedAdAccountId = this.adAccounts[0].account_id;
          this.loadLiveCampaigns();
        } else {
          this.isLoading = false;
        }
      },
      err => {
        console.error("Error loading FB ad accounts", err);
        this.isLoading = false;
      }
    );
  }

  onAdAccountChange() {
    this.loadLiveCampaigns();
  }

  loadLiveCampaigns() {
    if (!this.selectedAdAccountId) return;
    this.isLoading = true;
    this.http.get<any[]>(environment.BasePath + 'Campaign/facebook_campaigns/' + this.selectedAdAccountId).subscribe(
      res => {
        this.liveMetaCampaigns = res || [];
        this.activeMetaCampaigns = this.liveMetaCampaigns.filter(c => ['ACTIVE', 'IN_PROCESS', 'WITH_ISSUES'].includes(c.effective_status) || ['ACTIVE', 'IN_PROCESS', 'WITH_ISSUES'].includes(c.status));
        this.pausedMetaCampaigns = this.liveMetaCampaigns.filter(c => !(['ACTIVE', 'IN_PROCESS', 'WITH_ISSUES'].includes(c.effective_status) || ['ACTIVE', 'IN_PROCESS', 'WITH_ISSUES'].includes(c.status)));
        this.isLoading = false;
      },
      err => {
        console.error("Error loading FB campaigns", err);
        this.isLoading = false;
      }
    );
  }

  viewMetaCampaignLeads(metaCamp: any) {
    this.selectedCampaign = { campaign_name: metaCamp.name, Total_Leads: metaCamp.results || 0 };
    this.isDetailView = true;
    this.isLoading = true;
    
    this.http.get<any>(environment.BasePath + 'Campaign/meta_leads/' + metaCamp.id).subscribe(
      res => {
        this.campaignLeadsList = res.leads || [];
        if (res.campaign_name) {
           this.selectedCampaign.campaign_name = res.campaign_name;
        }
        this.selectedCampaign.Total_Leads = this.campaignLeadsList.length;
        this.isLoading = false;
      },
      err => {
        console.error("Error loading Meta leads", err);
        this.isLoading = false;
      }
    );
  }

}
