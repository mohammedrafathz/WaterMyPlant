﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend.Data;

#nullable disable

namespace backend.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20211228204131_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.1");

            modelBuilder.Entity("backend.Models.Plant", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("lastWateredAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("plantName")
                        .HasColumnType("TEXT");

                    b.Property<bool>("status")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Plants");
                });
#pragma warning restore 612, 618
        }
    }
}