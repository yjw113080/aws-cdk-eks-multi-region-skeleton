import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import * as eks from '@aws-cdk/aws-eks';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as autoscaling from '@aws-cdk/aws-autoscaling';
import { PhysicalName, Aws, Tag } from '@aws-cdk/core';


export class ClusterStack extends cdk.Stack {
  public readonly cluster: eks.Cluster;
  public readonly asg: autoscaling.AutoScalingGroup;
  public readonly roleFor2ndRegionDeployment: iam.Role;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  }
}

export interface CommonProps extends cdk.StackProps {
  cluster: eks.Cluster,
  asg: autoscaling.AutoScalingGroup
}

export interface PropForCicd extends cdk.StackProps {
  cluster: eks.Cluster,
  asg: autoscaling.AutoScalingGroup,
  roleFor2ndRegionDeployment: iam.Role
}